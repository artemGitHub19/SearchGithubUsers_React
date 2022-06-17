import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";

import styles from '../styles/Main.module.css';

import GitHubService from "../API/GitHubService";

import UserInformation from "../components/UserInformation";
import Repositories from "../components/Repositories";
import Loader from '../components/UI/Loader/Loader';

const Main = function Main() {

    let navigate = useNavigate();    
    let {enteredUserName} = useParams();

    const [userName, setUserName] = useState();    
    const [error, setError] = useState(null); 
    const [isUserInformationLoaded, setIsUserInformationLoaded] = useState(false);    
    const [userInformation, setUserInformation] = useState({});

    if ( userName !== enteredUserName ) {
        setIsUserInformationLoaded(false);
        setError(null);
        setUserName(enteredUserName);
        setUserInformation({});
    }

    useEffect( () => { 

        GitHubService.getUserInformation(userName)
            .then( 
                (data) => {

                    if ( data['publicRepositories'] > 0 ) {   
                        setUserInformation(data);
                        setIsUserInformationLoaded(true);                                          
                    } else {
                        navigate(`/repositoriesnotfound`, {state : {userInformation: data}});      
                    }
                },        
                (error) => {                    
                    if (error.status === 404) {
                        navigate('/usernotfound');
                    } else {
                        console.error(error); 
                        setError(error);                                       
                    }
                }
            );     
    }, [userName, navigate]);

    if ( userName !== enteredUserName ) {

        return (
            <div className={styles.main}>
                <div className={styles.userInfo}>                                           
                    <div className={styles.userInfo__loader}><Loader/></div>                               
                </div>                               
            </div> 
        );

    } else if ( error ) {

        return <div className={styles.error}>Error: {error.message}</div>;

    } else if ( !isUserInformationLoaded ) {

        return (
            <div className={styles.main}>
                <div className={styles.userInfo}>                                           
                    <div className={styles.userInfo__loader}><Loader/></div>                               
                </div>                               
            </div> 
        );

    } else {
        
        return (
            <div className={styles.main}>
                <div className={styles.userInfo}>                   
                    <UserInformation data={userInformation} wrapperClassName='mainUserInfo'/>                               
                </div> 
                <div className={styles.repositories}>                        
                    <Repositories userName={userName}/>                              
                </div>                
            </div> 
        );        
    }   
};

export default Main;
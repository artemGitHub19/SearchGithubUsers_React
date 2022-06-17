import React from 'react';
import { useLocation } from "react-router-dom";

import styles from '../styles/RepositoriesNotFound.module.css';
import notFoundIcon from '../icons/notFoundRepositories.svg';
import UserInformation from "../components/UserInformation";

const RepositoriesNotFound = function RepositoriesNotFound() {
    const {state} = useLocation();

    return (    
        <div className={styles.main}>            
            <div className={styles.userInfo}>
                <UserInformation data={state.userInformation} wrapperClassName='repositoriesNotFoundUserInfo'/>         
            </div>  
            <div className={styles.repositoriesInfoWrapper}>
                <div className={styles.repositoriesInfo}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.image}>
                            <img src={notFoundIcon} alt='not found repositories'></img>                        
                        </div>                         
                    </div>   
                    <div className={styles.repositoriesInfo__text}>Repository list is empty</div>            
                </div>            
            </div>             
        </div>         
    )
};

export default RepositoriesNotFound;
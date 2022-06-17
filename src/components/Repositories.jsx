import React, { useState, useEffect} from 'react';

import styles from '../styles/Repositories.module.css';

import { formatNumber } from '../utils/Utils';
import {getRepositoriesToShow} from '../utils/Repositories';

import RepositoryItem from './RepositoryItem';
import Pagination from './UI/Pagination/Pagination';
import Loader from '../components/UI/Loader/Loader';

import GitHubService from "../API/GitHubService";

const Repositories = function Repositories({userName}) {
    
    const repositoryCountPerPage = 4;
    const [currentPageNumber, setCurrentPageNumber] = useState(1);  
    const [repositories, setRepositories] = useState([]);
    const [isRepositoriesLoaded, setIsRepositoriesLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect( () => {     

        GitHubService.getRepositories(userName)
            .then( 
                (data) => {                 
                    setRepositories(data);
                    setIsRepositoriesLoaded(true);
                },
                (error) => {   
                    console.error(error);
                    setError(error);                     
                }
            );  

    }, [userName]);

    function handleCurrentPageChange(currentPageNumber) {       
        setCurrentPageNumber(currentPageNumber); 
    }      

    if ( error ) {

        return <div className={styles.error}>Error: {error.message}</div>;     

    } else if ( !isRepositoriesLoaded ) {

        return <div className={styles.loaderWrapper}><Loader/></div> ;

    } else {

        let repositoriesToShow = getRepositoriesToShow(repositories, repositoryCountPerPage, currentPageNumber);
        let repositoriesFormattedCount = formatNumber(repositories.length);

        return (
            <div className={styles.repositories}>
                <div className={styles.repositories__title}>Repositories ({repositoriesFormattedCount})</div>
    
                {
                    repositoriesToShow.map( (item, index) =>
    
                        <RepositoryItem item={item} key={index}/>
                    )               
                }  
    
                {
                    (repositories.length > repositoryCountPerPage) &&
    
                    <Pagination currentPageNumber={currentPageNumber} 
                                repositoriesCountPerPage={repositoryCountPerPage} 
                                repositoriesToShow={repositoriesToShow} 
                                repositoriesCount={repositories.length}
                                pagesCountPerPagination={5}
                                onCurrentPageNumberChange={handleCurrentPageChange}/>
                }        
            </div>
        );        
    }       
};

export default Repositories;
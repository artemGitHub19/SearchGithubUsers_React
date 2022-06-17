import React from 'react';
import styles from '../styles/InitialState.module.css';

import searchIcon from '../icons/search.svg';

const InitialState = function InitialState() {

    return (   
        <div className={styles.main}> 
            <div className={styles.initialStateInfo}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <img src={searchIcon} alt='search'></img>                        
                    </div>                         
                </div>                     
                <div className={styles.initialStateInfo__text}>Start with a searching GitHub user</div>  
            </div> 
        </div>        
    )
};

export default InitialState;

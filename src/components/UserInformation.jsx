import React, { useState } from 'react';
import styles from '../styles/UserInformation.module.css';

import groupIcon from '../icons/group.svg';
import personIcon from '../icons/person.svg';

import { formatNumber } from '../utils/Utils';
import Loader from './UI/Loader/Loader';

const UserInformation = function ({data, wrapperClassName}) {    
    
    const [isUserImageLoading, setIsUserImageLoading] = useState(true);

    function handleUserImageLoad() {        
        let elem = document.querySelector('#userimage');        
        elem.removeAttribute('hidden');
        setIsUserImageLoading(false);
    }

    return (
        <div className={styles[wrapperClassName]}>
            <div className={styles['userPhotoWrapper']}>

                {
                    isUserImageLoading && <Loader/> 
                } 

                <img    id='userimage'
                        className={styles['userPhoto']}
                        src={data.photoUrl} 
                        hidden                        
                        alt='user icon' 
                        onLoad={handleUserImageLoad}></img> 
            </div>

            <div className={styles['userInfo']}>
                <div className={styles['userInfo__name']}>{data.name}</div>  
                <div className={styles['userInfo__username']}>
                    <a className={styles['profileLink']} href={data.profile} target="_blank" rel="noreferrer">{data.login}</a>
                </div>                  
                
                <div className={styles['followWrapper']}>

                    <div className={styles['followers']}>
                        <div className={styles['groupImageWrapper']}>
                            <img className={styles['groupImage']} src={groupIcon} alt='group icon'></img>            
                        </div>
                        <div className={styles['followers__text']}>{formatNumber(data.followers)} followers</div> 
                    </div>      

                    <div className={styles['following']}>  
                        <div className={styles['personImageWrapper']}>
                            <img className={styles['personImage']} src={personIcon} alt='person icon'></img>
                        </div> 
                        <div className={styles['following__text']}>{formatNumber(data.following)} following</div>
                    </div>
                </div>
            </div>         
        </div> 
    )
};

export default UserInformation;

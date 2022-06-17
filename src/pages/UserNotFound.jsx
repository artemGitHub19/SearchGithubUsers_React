import React from 'react';
import styles from '../styles/UserNotFound.module.css';
import userIcon from '../icons/user.svg';

function UserNotFound() {
  return (
    <div className={styles.main}> 
      <div className={styles.userNotFound}>
          <div className={styles.imageWrapper}>
              <div className={styles.image}>
                  <img src={userIcon} alt='a man'></img>                        
              </div>                         
          </div>                     
          <div className={styles.userNotFound__text}>User not found</div>  
      </div> 
    </div>        
  )
}

export default UserNotFound
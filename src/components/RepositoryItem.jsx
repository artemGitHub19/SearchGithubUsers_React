import React from 'react';
import styles from './../styles/RepositoryItem.module.css';

function RepositoryItem(props) {

  return (
    <div className={styles.repositoryWrapper}>
      <div className={styles.repository}>
        <div className={styles.repository__name}>
          <a className={styles.repository__link} href={props.item.repository} target="_blank" rel="noreferrer">{props.item.name}</a>  
        </div>
        <div className={styles.repository__description}>
          {props.item.description}
        </div>
      </div>      
    </div>
  )
}

export default RepositoryItem
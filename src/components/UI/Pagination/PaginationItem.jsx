import React from 'react';
import styles from './PaginationItem.module.css';

import PaginationImage from './PaginationImage';

function PaginationItem({item, onItemClick}) {

    return (
        <div onClick={onItemClick} className={styles[item.className]} data-name={item.name}>    
            {
                ( item.className === 'imageButton' )
                ? <PaginationImage item={item}/>
                : item.name
            }
        </div>   
    );
}

export default PaginationItem;
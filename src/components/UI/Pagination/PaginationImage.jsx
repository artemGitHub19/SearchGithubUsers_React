import React from 'react';

import styles from './PaginationImage.module.css';

import rightChevron from './icons/rightChevron.svg';
import leftChevron from './icons/leftChevron.svg';
import doubleLeftChevron from './icons/doubleLeftChevron.svg';
import doubleRightChevron from './icons/doubleRightChevron.svg';

function PaginationImage({item}) {

    const image = getImage();

    function getImage() {
        switch (item.name) {
            case '>':
                return rightChevron;
            case '<':
                return leftChevron;
            case '>>':
                return doubleRightChevron;
            case '<<':
                return doubleLeftChevron;
            default:
                break;
        }        
    }

    return (
        <>         
            <img src={image} 
                 alt={item.alternativeText} 
                 data-name={item.name} 
                 className={styles[item.imageClassName]}></img>                  
        </>
    ) 
}

export default PaginationImage

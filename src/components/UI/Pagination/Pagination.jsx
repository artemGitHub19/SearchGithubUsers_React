import React from 'react';
import styles from './Pagination.module.css';

import PaginationItem from './PaginationItem';

import { formatNumber } from './../../../utils/Utils';
import { getShownRepositoriesRange } from './../../../utils/Pagination';

import { 
    getPageCount,
    getPages,
    getPaginationItems,
    doesThePreviousPageExist,
    doesTheNextPageExist,
    doNextPaginationItemsExist,
    doPreviousPaginationItemsExist,
    isPageNumberClicked
} from './../../../utils/Pagination';

function Pagination({currentPageNumber, repositoriesCountPerPage, repositoriesToShow, repositoriesCount, pagesCountPerPagination, onCurrentPageNumberChange}) {  
     
    function handleItemClick(event) {

        let clickedItem = event.target.dataset.name; 
        
        let newCurrentPageNumber;

        switch (clickedItem) {
            case '>':
                if ( doesTheNextPageExist(currentPageNumber, repositoriesCount, repositoriesCountPerPage) ) {   
                    newCurrentPageNumber = ++currentPageNumber;
                }             
                break;
            case '<':
                if ( doesThePreviousPageExist(currentPageNumber) ) {   
                    newCurrentPageNumber = --currentPageNumber;
                }                
                break;      
            case '>>':  
                if ( doNextPaginationItemsExist(currentPageNumber, pagesCountPerPagination, repositoriesCount, repositoriesCountPerPage)) {        
                
                    let pageCount = getPageCount(repositoriesCount, repositoriesCountPerPage);
        
                    newCurrentPageNumber = currentPageNumber + pagesCountPerPagination;
        
                    if ( newCurrentPageNumber > pageCount ) {
                        newCurrentPageNumber = pageCount;
                    } 
                }   
                break;
            case '<<':  
                if ( doPreviousPaginationItemsExist(repositoriesCount, repositoriesCountPerPage, currentPageNumber, pagesCountPerPagination)) {    

                    newCurrentPageNumber = currentPageNumber - pagesCountPerPagination;
        
                    if ( newCurrentPageNumber < 1 ) {
                        newCurrentPageNumber = 1;
                    } 
                }  
                break;      
            case "GoToPage":  
                let selectedPageNumber = +event.target.value;  
                newCurrentPageNumber = selectedPageNumber;   
                break;   
            default:
                if ( isPageNumberClicked(clickedItem) ) {
                    let selectedPageNumber = +clickedItem;                    
                    newCurrentPageNumber = selectedPageNumber;
                }                 
        }  

        if ( newCurrentPageNumber ) {
            onCurrentPageNumberChange(newCurrentPageNumber);
        }       
    }   
    
    let paginationItems = getPaginationItems(currentPageNumber, repositoriesCount, repositoriesCountPerPage, pagesCountPerPagination);
    let pages = getPages(repositoriesCount, repositoriesCountPerPage);
    let shownRepositoriesRange = getShownRepositoriesRange(currentPageNumber, repositoriesCountPerPage, repositoriesToShow);

    return (
        <div className={styles['pagination']}>           
                    
            <span className={styles['pagination_info']}>
                {shownRepositoriesRange} of {formatNumber(repositoriesCount)} items
            </span>

            <div className={styles['pagination__items']}>   
                {
                    paginationItems.map( (item, index) => 
                        <PaginationItem key={index} item={item} onItemClick={handleItemClick}/> 
                    )
                }  
            </div>

            {
                ( pages.length > 10 ) && (        

                    <div className={styles['goToPage']}>
                        Go to page &nbsp;
                        <select className={styles['selectPage']} data-name="GoToPage" value={currentPageNumber} name="pageSearch" onChange={handleItemClick}>
                            {
                                pages.map( (item) =>   
                                    <option key={item} value={item}>{item}</option>                                                                            
                                )
                            }                      
                        </select>
                    </div>
                )
            }            
        </div>  
    )
}

export default Pagination
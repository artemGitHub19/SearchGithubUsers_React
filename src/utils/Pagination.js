export const getPageCount = function getPageCount(repositoriesCount, repositoryCountPerPage) {

   let pageCount;

   if ( repositoriesCount % repositoryCountPerPage === 0 ) {

      pageCount = repositoriesCount/repositoryCountPerPage;
      
   } else {
      pageCount = Math.floor(repositoriesCount/repositoryCountPerPage) + 1;            
   }  
   return pageCount;
};

export const getPages = function getPages(repositoriesCount, repositoryCountPerPage) {

   let pageCount = getPageCount(repositoriesCount, repositoryCountPerPage);

   let newPages = [];

   for (let i = 1; i <= pageCount; i++) {
      newPages.push(i);            
   }
   return newPages;
};

export const getPaginationItems = function getPaginationItems(currentPageNumber, repositoriesCount, repositoryCountPerPage, pagesCountPerPagination) {
   
   let {leftPageNumber, rightPageNumber} = getSelectedPagePaginationRange(pagesCountPerPagination, repositoriesCount, repositoryCountPerPage, currentPageNumber);
 
   let paginationItems = []; 

   paginationItems.push(
      {
         name: '<<', 
         className: 'imageButton', 
         imageClassName: 'leftChevron',
         alternativeText: 'previous pagination items'
      }); 

   paginationItems.push(
      {
         name: '<', 
         className: 'imageButton', 
         imageClassName: 'leftChevron',
         alternativeText: 'previous page'
      });

   let className;

   for (let i = leftPageNumber; i <= rightPageNumber; i++) {  

      className = (i === currentPageNumber) ? 'selectedPaginationItem' : 'paginationItem';

      paginationItems.push(
         {
            name: '' + i, 
            className: className
         });  
   }  

   paginationItems.push(
      {
         name: '>', 
         className: 'imageButton', 
         imageClassName: 'rightChevron',
         alternativeText: 'next page'
      });

   paginationItems.push(
      {
         name: '>>', 
         className: 'imageButton', 
         imageClassName: 'rightChevron',
         alternativeText: 'next pagination items'
      });   

   return paginationItems;
};

export const getShownRepositoriesRange = function getShownRepositoriesRange(currentPageNumber, repositoryCountPerPage, repositoriesToShow) {

   let previousItems = (currentPageNumber - 1) * repositoryCountPerPage;
   
   let start = previousItems + 1;
   let end = previousItems + repositoriesToShow.length;

   let range = start + '-' + end;

   return range;
};

function getSelectedPagePaginationRange(pagesCountPerPagination, repositoriesCount, repositoryCountPerPage,  selectedPage) {

   let pageCount = getPageCount(repositoriesCount, repositoryCountPerPage);

   let newLeftPageNumber;
   let newRightPageNumber;

   for (let i = 1; i <= selectedPage; i += pagesCountPerPagination) {

      if ( selectedPage >= i && selectedPage < (i + pagesCountPerPagination)) {

            newLeftPageNumber = i; 
            newRightPageNumber = i + pagesCountPerPagination - 1; 

            if ( newRightPageNumber > pageCount) { 
               newRightPageNumber = pageCount;    
            } 
            break;
      }             
   } 

   return {leftPageNumber: newLeftPageNumber, rightPageNumber: newRightPageNumber};
};

export const doesThePreviousPageExist = function (currentPageNumber) {

   let result = false;

   if ( currentPageNumber - 1 >= 1 ) {
      result = true;
   }

   return result;
};

export const doesTheNextPageExist = function (currentPageNumber, repositoriesCount, repositoryCountPerPage) {

   let pageCount = getPageCount(repositoriesCount, repositoryCountPerPage);

   let result = false;

   if ( currentPageNumber + 1 <= pageCount ) {
      result = true;
   }

   return result;
};

export const doNextPaginationItemsExist = function doNextPaginationItemsExist(currentPageNumber, pagesCountPerPagination, repositoriesCount, repositoryCountPerPage) {

   let {rightPageNumber} = getSelectedPagePaginationRange(pagesCountPerPagination, repositoriesCount, repositoryCountPerPage, currentPageNumber); 

   let pageCount = getPageCount(repositoriesCount, repositoryCountPerPage);

   let result = false;

   if ( rightPageNumber < pageCount ) {
      result = true;
   }

   return result;
};

export const doPreviousPaginationItemsExist = function doPreviousPaginationItemsExist(repositoriesCount, repositoryCountPerPage, currentPageNumber, pagesCountPerPagination) {

   let result = false;

   let {rightPageNumber} = getSelectedPagePaginationRange(pagesCountPerPagination, repositoriesCount, repositoryCountPerPage, currentPageNumber);

   if ( rightPageNumber > pagesCountPerPagination ) {
      result = true;
   }

   return result;
};

export const isPageNumberClicked = function isPageNumberClicked(clickedItem) {

   let result = false;

   if ( isNaN(+clickedItem) === false ) {
      result = true;
   }

   return result;
};
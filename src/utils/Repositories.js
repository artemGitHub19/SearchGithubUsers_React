export const getRepositoriesToShow = function getRepositoriesToShow(repositories, repositoryCountPerPage, currentPageNumber) {

    let repos = [...repositories];
 
    let repositoriesToShow = repos.splice((currentPageNumber - 1) * repositoryCountPerPage, repositoryCountPerPage);
 
    return repositoriesToShow;
 };  
import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from '../styles/Header.module.css'
import catIcon from '../icons/cat.svg';
import searchIcon from '../icons/searchIcon.svg';
import { isEnterKeyPressed } from '../utils/Utils';

function Header() {

  let navigate = useNavigate();  

  function handleKeyPress(event) {    
    let enteredValue = event.target.value;
    
    if ( isEnterKeyPressed(event) ) {
      if (enteredValue) {
        navigate(`/main/${enteredValue}`)
      } else {
        navigate(`/`)
      }
    }
  }

  function handleSearchContainerClick() {
    document.querySelector(`#searchInput`).focus();
  }
  
  return (
    <div className={styles.main}>    
      <img className={styles.catImage} src={catIcon} alt='cat icon'></img>            
      <div className={styles.searchWrapper} onClick={handleSearchContainerClick}>
        <div className={styles.search}>           
          <div className={styles.searchIcon}>
              <img src={searchIcon} alt='search icon'></img>
          </div>                
          <input id='searchInput' className={styles.searchInput} type="text" onKeyPress={handleKeyPress}></input>
        </div>
      </div>     
    </div>
  )
};

export default Header;
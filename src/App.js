import React, { Component, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Basket from './components/Basket/Basket';
//images
import logo from './images/main-page/logo-red.png';
import whiteLogo from './images/main-page/nike-logo.png';
import mediumKross1 from './images/main-page/kross-1.png';
import mediumKross2 from './images/main-page/kross-2.png';
import mediumKross3 from './images/main-page/kross-3.png';
import kross1 from './images/main-page/kross-little-1.jpg';

const App = ({ route }) => {
    
    const [isMenuDroped, dropMenu] = useState(false);
    const [openScreen, setOpenScreen] = useState('basket');
    
    
    
    return (
      <div className="App">
      
          <header className='main-slider-header'>
              <div className={ isMenuDroped ? "drop-menu active" : "drop-menu"}>
               <ul>
                    <li>ГЛАВНАЯ</li>
                    <li>КАТАЛОГ</li>
                    <li>КОРЗИНА</li>
                </ul>
               </div>
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="#">MEN</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">WOMEN</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">BOYS</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">GIRLS</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">CUSTOMIZE</a></li>
                </ul>
                <div className="logo"></div>
                <i
                    className={ isMenuDroped ? "drop-menu-close fas fa-times" : "drop-menu-icon fas fa-bars"} 
                    onClick={() => dropMenu(!isMenuDroped)}
                ></i>
          </header>
          
          {openScreen === 'catalog' 
                ? <Catalog />  
                : openScreen === 'main' 
                    ? <MainPage /> 
                    : openScreen === 'basket' 
                        ? <Basket />
                        : <h1><br/><br/><br/><br/>PAGE NOT FOUND!</h1>}
       
          
        
      </div>
    );
}

export default App;

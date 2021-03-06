import React, { Suspense, Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Basket from './components/Basket/Basket';

import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

//images
import logo from './images/main-page/logo-red.png';
import whiteLogo from './images/main-page/nike-logo.png';
import mediumKross1 from './images/main-page/kross-1.png';
import mediumKross2 from './images/main-page/kross-2.png';
import mediumKross3 from './images/main-page/kross-3.png';

import grey1 from './images/main-page/grey1.png';
import grey2 from './images/main-page/grey2.png';
import grey3 from './images/main-page/grey3.png';
import grey4 from './images/main-page/grey4.png';

import blue1 from './images/main-page/blue1.png';
import blue2 from './images/main-page/blue2.png';
import blue3 from './images/main-page/blue3.png';
import blue4 from './images/main-page/blue4.png';

import red1 from './images/catalog/red1.png';
import red2 from './images/catalog/red2.png';
import red3 from './images/catalog/red3.png';
import red4 from './images/catalog/red4.png';

import black1 from './images/catalog/black1.png';
import black2 from './images/catalog/black2.png';
import black3 from './images/catalog/black3.png';
import black4 from './images/catalog/black4.png';

class App extends React.Component {
    
    constructor({route}){
        super({route});
        
        
    }
    
    state = {
        ItemsDatabase : [
            {
                image: grey1,
                collection: 'AIR JORDAN',
                model: 'FUTURE',
                color: 'grey',
                price: 9900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: grey2,
                collection: 'JORDAN FLIGHT',
                model: 'ORIGIN 4',
                color: 'grey',
                price: 9190,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: grey3,
                collection: 'AIR JORDAN',
                model: 'FIRST CLASS',
                color: 'grey',
                price: 8490,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: grey4,
                collection: 'AIR JORDAN',
                model: 'TRAINER 2',
                color: 'grey',
                price: 7900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: blue1,
                collection: 'JORDAN FLIGHT',
                model: 'ORIGIN 4',
                color: 'blue',
                price: 9190,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: blue2,
                collection: 'JORDAN TRAINER',
                model: 'PRO',
                color: 'blue',
                price: 8190,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: blue3,
                collection: 'JORDAN SUPER',
                model: 'FLY 2017',
                color: 'blue',
                price: 9490,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: blue4,
                collection: 'AIR JORDAN',
                model: 'TRAINER 2',
                color: 'blue',
                price: 7900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: red1,
                collection: 'AIR JORDAN',
                model: 'XI RETRO',
                color: 'red',
                price: 14990,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: red2,
                collection: 'JORDAN ULTRA',
                model: 'FLY 2 LOW',
                color: 'red',
                price: 12190,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: red3,
                collection: 'JORDAN FLY',
                model: 'UNLIMITED',
                color: 'red',
                price: 9490,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: red4,
                collection: 'JORDAN',
                model: 'J23',
                color: 'red',
                price: 8900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: black1,
                collection: 'AIR JORDAN',
                model: 'FIRST CLASS',
                color: 'black',
                price: 6490,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: black2,
                collection: 'AIR JORDAN',
                model: 'FUTURE',
                color: 'black',
                price: 9900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: black3,
                collection: 'JORDAN',
                model: 'ECLIPSE',
                color: 'black',
                price: 8490,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },
            {
                image: black4,
                collection: 'JORDAN FORMULA',
                model: '23 LOW',
                color: 'black',
                price: 8900,
                cardSize: 'regular',
                category: 'Мужская обувь',
                isAddInBasket: false
            },

        ],
        isMenuDroped: false
    }
    
    dropMenu = () => {
        this.setState({
            isMenuDroped: !this.state.isMenuDroped
        })
    }
    
    render(){
        
        return (
          <div className="App">

              <header className='main-slider-header'>
                  <div className={ this.state.isMenuDroped ? "drop-menu active" : "drop-menu"}>
                   <ul>
                        <li><Link className="screens-link" to="/">ГЛАВНАЯ</Link></li>
                        <li><Link className="screens-link" to="/catalog">КАТАЛОГ</Link></li>
                        <li><Link className="screens-link" to="/basket">КОРЗИНА</Link></li>
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
                        className={ this.state.isMenuDroped ? "drop-menu-close fas fa-times" : "drop-menu-icon fas fa-bars"} 
                        onClick={this.dropMenu}
                    ></i>
              </header>

              <Suspense fallback={<div>Loading...</div>}>
                    {renderRoutes(this.props.route.routes, {database: this.state.ItemsDatabase})}
            </Suspense>

          </div>
        );
        
    }
    
    
}

export default App;

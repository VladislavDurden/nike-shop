import React from 'react';
import './Basket.css';
//images
import kross1 from '../../images/main-page/kross-little-1.jpg';

const Basket = () => {
    
    return(
    
        <section className="basket">
            <div className="container">
                <nav className="navbar search-navbar basket-search-navbar">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </nav>
                <div className="row">
                    <div className="col basket-half basket-items">
                        <h4>КОРЗИНА</h4>
                        <div className="row">
                            <div className="col-7 basket-column">
                                <h5 className="basket-column-name">Товары</h5>
                            </div>
                            <div className="col-2 basket-column">
                                <h5>Кол-во</h5>
                            </div>
                            <div className="col-3 basket-column">
                                <h5>Цена</h5>
                            </div>
                        </div>
                        <div className="basket-item">
                            <div className="row">
                                <div className="col-7 basket-column">
                                           <img className="basket-item-img" src={kross1} alt=""/>
                                           <h5><strong>AIR JORDAN</strong><br/>FIRST CLASS</h5>
                                           <p>
                                               Размер 
                                               <span className='sneaker-size'>
                                                   <strong>42</strong>
                                                </span>
                                            </p>
                                </div>
                                <div className="col-2 basket-column">
                                    <h5>Кол-во</h5>
                                </div>
                                <div className="col-3 basket-column">
                                    <h5>Цена</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col basket-half basket-payment">
                        <h4>ОПЛАТА</h4>
                    </div>
                </div>
            </div>
            
        </section>
    
    )
    
}

export default Basket;
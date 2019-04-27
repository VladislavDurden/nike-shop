import React from 'react';
import './Basket.css';
//images
import kross1 from '../../images/main-page/kross-little-1.jpg';

const Basket = ({ route }) => {
    
    return(
    
        <section className="basket">
            <div className="container">
                <nav className="navbar search-navbar basket-search-navbar">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </nav>
                <div className="row">
                    <div className="col basket-half basket-items">
                        <h4>КОРЗИНА</h4>
                        <div className="row top-basket-columns-names">
                            <div className="col-7 basket-column">
                                <h5 className="basket-column-name">Товары</h5>
                            </div>
                            <div className="col-2 basket-column">
                                <h5 className="basket-column-name">Кол-во</h5>
                            </div>
                            <div className="col-2 basket-column">
                                <h5 className="basket-column-name">Цена</h5>
                            </div>
                            <div className="col-1 basket-column"></div>
                        </div>
                        <div className="basket-item">
                            <div className="row">
                                <div className="col-7 basket-column">
                                    <div className="row">
                                        <div className="col-5">
                                           <img className="basket-item-img" src={kross1} alt=""/> 
                                        </div>
                                        <div className="col-7">
                                            <h5><strong>AIR JORDAN</strong><br/>FIRST CLASS</h5>
                                           <p>
                                               Размер 
                                               <span className='sneaker-size'>
                                                   <strong>42</strong>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <div className="basket-item-amount">
                                        <strong>1</strong>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <p className="basket-item-price"><strong>9900 Р</strong></p>
                                </div>
                                <div className="col-1 basket-column">
                                    <i class="fas fa-times delete-basket-item"></i>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="basket-item">
                            <div className="row">
                                <div className="col-7 basket-column">
                                    <div className="row">
                                        <div className="col-5">
                                           <img className="basket-item-img" src={kross1} alt=""/> 
                                        </div>
                                        <div className="col-7">
                                            <h5><strong>AIR JORDAN</strong><br/>FIRST CLASS</h5>
                                           <p>
                                               Размер 
                                               <span className='sneaker-size'>
                                                   <strong>42</strong>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <div className="basket-item-amount">
                                        <strong>1</strong>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <p className="basket-item-price"><strong>9900 Р</strong></p>
                                </div>
                                <div className="col-1 basket-column">
                                    <i class="fas fa-times delete-basket-item"></i>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="basket-item">
                            <div className="row">
                                <div className="col-7 basket-column">
                                    <div className="row">
                                        <div className="col-5">
                                           <img className="basket-item-img" src={kross1} alt=""/> 
                                        </div>
                                        <div className="col-7">
                                            <h5><strong>AIR JORDAN</strong><br/>FIRST CLASS</h5>
                                           <p>
                                               Размер 
                                               <span className='sneaker-size'>
                                                   <strong>42</strong>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <div className="basket-item-amount">
                                        <strong>1</strong>
                                    </div>
                                </div>
                                <div className="col-2 basket-column">
                                    <p className="basket-item-price"><strong>9900 Р</strong></p>
                                </div>
                                <div className="col-1 basket-column">
                                    <i class="fas fa-times delete-basket-item"></i>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="basket-total-price">
                            <h5 className='basket-column-name'>Сумма: <strong>23333 P</strong></h5>
                            <hr/>
                        </div>
                        <div className="basket-items-bottom-buttons">
                           <div className="row">
                               <div className="col continue-shopping-col">
                                   <button className="continue-shopping">ПРОДОЛЖИТЬ ПОКУПКИ</button>
                               </div>
                               <div className="col">
                                   <button className="pay">ОПЛАТИТЬ</button>
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
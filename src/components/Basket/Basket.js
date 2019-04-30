import React from 'react';
import './Basket.css';
//images
import kross1 from '../../images/main-page/grey1.png';

const Basket = ({ route }) => {
    
    return(
    
        <section className="basket">
            <div className="container">
                <nav className="navbar search-navbar basket-search-navbar">
                    <input className="form-control basket-top-search" type="search" placeholder="Поиск" aria-label="Search"/>
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
                                    <i className="fas fa-times delete-basket-item"></i>
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
                                    <i className="fas fa-times delete-basket-item"></i>
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
                                    <i className="fas fa-times delete-basket-item"></i>
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
                        
                        <form>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput1">Ваще имя</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput1"/>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Ваша фамилия</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput2"/>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput3">E-mail</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput3"/>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput4">Город</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput4"/>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword5">Адрес</label>
                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword5"/>
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput6">Индекс</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput6"/>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput7">Телефон</label>
                                <input type="text" className="form-control form-control-lg" id="formGroupExampleInput7"/>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                                <label htmlFor="formGroupExampleInput8">Способ оплаты</label>
                                <select className="form-control form-control-lg" id="formGroupExampleInput8">
                                  <option>Master Card</option>
                                  <option>Maestro</option>
                                  <option>Visa</option>
                                  <option>Яндекс.Деньги</option>
                                </select>
                              </div>
                          <button className="form-btn pay">ОПЛАТИТЬ</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    
    )
    
}

export default Basket;
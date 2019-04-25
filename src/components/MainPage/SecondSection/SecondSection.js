import React from 'react';


//images
import logo from '../../../images/main-page/logo-red.png';
import kross1 from '../../../images/main-page/kross-little-1.jpg';
import kross2 from '../../../images/main-page/kross-little-2.jpg';
import kross3 from '../../../images/main-page/kross-little-3.jpg';
import kross4 from '../../../images/main-page/kross-little-4.jpg';
import bigRedKross from '../../../images/main-page/kross-big-red.png';
import bigBlackKross from '../../../images/main-page/kross-big-black.png';

const SecondSection = () => {
    return(
    
        <section>
            <div className="container">
               <div className="second-section-header">
                   <div className="row">
                       <div className="col header-left"><strong>УЖЕ В ПОЛЕТЕ</strong></div>
                       <div className="col header-right"><button className="all-shoes"><strong>ВСЯ ОБУВЬ</strong></button></div>
                   </div>
               </div>

                <div className='regular-cards-wrapper'>
                   <div className="all-cards">
                      <div className="big-card">
                        <div className="card text-black">
                            <img className="card-img" src={bigRedKross} alt="Card image"/>
                            <div className="card-img-overlay">
                               <p className="card-text card-upper-text">Мужская баскетбольная обувь</p>
                                <h5 className="card-title">JORDAN FLY</h5>
                                <p className="card-text big-card-text">UNLIMITED</p>
                                <img className="card-logo" src={logo} alt=""/>
                                <button className="big-card-btn">ДОБАВИТЬ В КАРЗИНУ</button>
                            </div>
                        </div>
                    </div>
                    <div className="big-card">
                        <div className="card text-black">
                            <img className="card-img" src={bigBlackKross} alt="Card image"/>
                            <div className="card-img-overlay">
                               <p className="card-text card-upper-text">Мужская баскетбольная обувь</p>
                                <h5 className="card-title">JORDAN FLY</h5>
                                <p className="card-text">SUPER 2017</p>
                                <img className="card-logo" src={logo} alt=""/>
                                <button className="big-card-btn">ДОБАВИТЬ В КАРЗИНУ</button>
                            </div>
                        </div>
                    </div>
                       <div className="card regular-card" >
                            <img className="card-img-top" src={kross1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title little-card"><strong>AIR JORDAN </strong>FUTURE</h5>
                                <img className="card-logo" src={logo} alt=""/>
                                <p className="card-text">Мужская обувь</p>
                                <h5 className="little-card-price"><strong>9900 P</strong></h5>
                            </div>
                        </div>
                        <div className="card regular-card" >
                            <img className="card-img-top" src={kross2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title little-card"><strong>JORDAN FLIGHT </strong>ORIGIN 4</h5>
                                <img className="card-logo" src={logo} alt=""/>
                                <p className="card-text">Мужская обувь</p>
                                <h5 className="little-card-price"><strong>9190 P</strong></h5>
                            </div>
                        </div>
                        <div className="card regular-card" >
                            <img className="card-img-top" src={kross3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title little-card"><strong>AIR JORDAN </strong>FIRST CLASS</h5>
                                <img className="card-logo" src={logo} alt=""/>
                                <p className="card-text">Мужская обувь</p>
                                <h5 className="little-card-price"><strong>8490 P</strong></h5>
                            </div>
                        </div>
                        <div className="card regular-card" >
                            <img className="card-img-top" src={kross4} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title little-card"><strong>AIR JORDAN </strong>TRAINER 2</h5>
                                <img className="card-logo" src={logo} alt=""/>
                                <p className="card-text">Мужская обувь</p>
                                <h5 className="little-card-price"><strong>7900 P</strong></h5>
                            </div>
                        </div>
                   </div>
                    
                </div>
                        

            </div>
        </section>
    
    )
}

export default SecondSection;
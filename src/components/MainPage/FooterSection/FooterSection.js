import React from 'react';
//images
import logo from '../../../images/main-page/logo-red.png';
import littleKross1 from '../../../images/main-page/blue1.png';
import littleKross2 from '../../../images/main-page/blue2.png';
import littleKross3 from '../../../images/main-page/blue3.png';
import littleKross4 from '../../../images/main-page/blue4.png';

const FooterSection = () => {
    return(
        <section>
           <div className="container">
                <div className='regular-cards-wrapper'>
                   <div className="all-cards">
                    <div className="card regular-card" >
                        <img className="card-img-top" src={littleKross1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title little-card"><strong>JORDAN FLIGHT </strong>TRAINER 2</h5>
                            <img className="card-logo" src={logo} alt=""/>
                            <p className="card-text">Мужская обувь</p>
                            <h5 className="little-card-price"><strong>9190 P</strong></h5>
                        </div>
                    </div>
                    <div className="card regular-card" >
                        <img className="card-img-top" src={littleKross2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title little-card"><strong>JORDAN TRAINER </strong>PRO</h5>
                            <img className="card-logo" src={logo} alt=""/>
                            <p className="card-text">Мужская обувь</p>
                            <h5 className="little-card-price"><strong>8190 P</strong></h5>
                        </div>
                    </div>
                    <div className="card regular-card" >
                        <img className="card-img-top" src={littleKross3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title little-card"><strong>JORDAN SUPER </strong>FLY 2017</h5>
                            <img className="card-logo" src={logo} alt=""/>
                            <p className="card-text">Мужская обувь</p>
                            <h5 className="little-card-price"><strong>7900 P</strong></h5>
                        </div>
                    </div>
                    <div className="card regular-card" >
                        <img className="card-img-top" src={littleKross4} alt="Card image cap" />
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

export default FooterSection;
import React, {useState} from 'react';
import mainKross from '../../../images/main-page/slider-kross.png';

const MainSlider = (props) => {
    
    const[isMenuDroped, dropMenu] = useState(false);
    
    return(
    
        <section id="slider">
          
            <div className="container slider-container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <div className="description">
                            <h1><strong>AIR JORDAN</strong></h1>
                            <h1>XI RETRO</h1>
                            <p>
                                Обновленный образ с плетеным<br/>
                                верхом и элементами, заимствованными<br/>
                                у модели Air Jordan XI
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className='main-kross' src={mainKross}/>
                    </div>
                </div>
                <ul className="slider-nav">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="lang">
                    <div className="english">EN</div>
                    <div className="russian">RU</div>
                </div>
            </div>
        </section>
    
    )
}

export default MainSlider;
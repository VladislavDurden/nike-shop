import React, {useState} from 'react';
import './Catalog.css';
//images
import logo from '../../images/main-page/logo-red.png';

const Catalog = (props, {route}) => {
    
    const[isColorClicked, clickColor] = useState(false);
    
    const addToBasket = (index) => {
        props.database[index].isAddInBasket = !props.database[index].isAddInBasket;
    }
    
    return(
    
        <section className="catalog-section">
          <div className="container">
             <nav className="navbar search-navbar">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </nav>
              <div className="wrap">
              <aside>
                <div className="sidebar">
                 <h5><span className="grey">AIR JORDAN</span> > МУЖСКАЯ ОБУВЬ</h5><br/>
                  <div className="sort-section sort-models">
                      <h5><strong>МОДЕЛИ</strong></h5>
                      <ul className="models-list">
                         <li>
                             <input type="checkbox" id="horns" name="Jordan 32" />
                              <label htmlFor="Jordan 32">Jordan 32</label>
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="Jordan 11" />
                              <label htmlFor="Jordan 11">Jordan 11</label>
                         </li>
                         <li>
                            <input type="checkbox" id="horns" name="Jordan 1" />
                              <label htmlFor="Jordan 1">Jordan 1</label> 
                         </li>
                         
                      </ul>
                  </div>
                  <div className="sort-section sort-sports">
                      <h5><strong>ВИД СПОРТА</strong></h5>
                      <ul className="sports-list">
                         <li>
                             <input type="checkbox" id="horns" name="sport style" />
                              <label htmlFor="sport style">Спортивный стиль</label>
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="running" />
                              <label htmlFor="running">Бег</label>
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="fitnes" />
                              <label htmlFor="fitnes">Фитнес</label>
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="basketball" />
                              <label htmlFor="basketball">Баскетбол</label>
                         </li>
                      </ul>
                  </div>
                  <div className="sort-section sort-collection">
                      <h5><strong>КОЛЛЕКЦИИ</strong></h5>
                      <ul className="collections-list">
                         <li>
                            <input type="checkbox" id="horns" name="Nike Air Max" />
                              <label htmlFor="Nike Air Max">Nike Air Max</label> 
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="Nike Flyknit" />
                          <label htmlFor="Nike Flyknit">Nike Flyknit</label>
                         </li>
                         <li>
                             <input type="checkbox" id="horns" name="Nike Air" />
                          <label htmlFor="Nike Air">Nike Air</label>
                         </li>
                      </ul>
                  </div>
                  <div className="sort-section sort-color">
                      <h5><strong>КОЛЛЕКЦИИ</strong></h5>
                      <ul className="colors-list">
                        <i 
                            className={isColorClicked ? "fas fa-check-circle white" : "fas fa-circle white"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle grey" : "fas fa-circle grey"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle blue" : "fas fa-circle blue"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle red" : "fas fa-circle red"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle green" : "fas fa-circle green"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle violet" : "fas fa-circle violet"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                        <i 
                            className={isColorClicked ? "fas fa-check-circle black" : "fas fa-circle black"} 
                            onClick={() => clickColor(!isColorClicked)}
                        ></i>
                      </ul>
                  </div>  
                </div>
              </aside>
  
              <div className="catalog">
                   { props.database.map((item, index) => {
                          return(

                                <div 
                                   className="card regular-card catalog-card" 
                                   key={index} 
                                   onClick={() => addToBasket(index)}
                                >
                                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title little-card">
                                            <strong>{item.collection} </strong>
                                        </h5>
                                        <img className="card-logo" src={logo} alt=""/>
                                        <h5 className="card-title little-card">{item.model}</h5>
                                        
                                        <p className="card-text">{item.category}</p>
                                        <h5 className="little-card-price"><strong>{item.price} P</strong></h5>
                                    </div>
                                </div>
                          )
                      }) 
                   }
              </div>
            </div>
          </div>
           
       </section>
    
    )
    
}

export default Catalog;
import React from 'react';
//images
import whiteLogo from '../../../images/main-page/nike-logo.png';
import mediumKross1 from '../../../images/main-page/kross-1.png';
import mediumKross2 from '../../../images/main-page/kross-2.png';
import mediumKross3 from '../../../images/main-page/kross-3.png';

const Collection = () => {
    return(
    
        <section id="collection">
           <div className="container">
               <div className="collection-header">
                   <div className="row">
                       <div className="col collection-header-left">
                           <strong>БАСКЕТБОЛ </strong>
                           <strong>КОЛЛЕКЦИЯ</strong>
                        </div>
                       <div className="col collection-header-right">ВСЯ КОЛЛЕКЦИЯ</div>
                   </div>
               </div>
                <div className="row">
                    <div className="collection-item col-md-4">
                       <h1>
                           <strong>AIR JORDAN</strong><br/>
                           XI RETRO&#032;
                           <img className="card-logo white-logo" src={whiteLogo} alt=""/>
                       </h1>
                        <img className='collection-image' src={mediumKross1} alt="Card image"/>
                    </div>
                    <div className="collection-item col-md-4">
                       <h1>
                           <strong>AIR JORDAN</strong><br/>
                           XI RETRO&#032;
                           <img className="card-logo white-logo" src={whiteLogo} alt=""/>
                       </h1>
                        <img className='collection-image' src={mediumKross2} alt="Card image"/>
                    </div>
                    <div className="collection-item col-md-4">
                       <h1>
                           <strong>AIR JORDAN</strong><br/>
                           XI RETRO&#032;
                           <img className="card-logo white-logo" src={whiteLogo} alt=""/>
                       </h1>
                        <img className='collection-image' src={mediumKross3} alt="Card image"/>
                    </div>
                </div>
           </div>
        </section>
    
    )
}

export default Collection;
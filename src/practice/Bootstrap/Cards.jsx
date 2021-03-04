import React from 'react';
import boys from '../WebSeries/image/boys.jpg';
import dark from '../WebSeries/image/dark.jpg';
import strengerthings from '../WebSeries/image/strenger things.jpg';
import sweethome from '../WebSeries/image/sweet home.jpg';


const Cards=()=>{
    return(
        <>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <h1 className="text-capitalize col-md-12 text-primary mb-4"> magic of bootstrap card </h1>
                <div className="card col-md-3" style={{width: '18rem'}}>
                    <img src={boys} className="card-img-top " alt="image" height="200px" width="150px"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


                <div className="card col-md-3" style={{width: '18rem'}}>
                    <img src={dark} className="card-img-top" alt="image" height="200px" width="150px"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


                <div className="card col-md-3" style={{width: '18rem'}}>
                    <img src={strengerthings} className="card-img-top " alt="image" height="200px" width="150px" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


                <div className="card col-md-3" style={{width: '18rem'}}>
                    <img src={sweethome} className="card-img-top " alt="image" height="200px" width="150px"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


            </div>

        </div>
  
        
        
        </>

    );
}
export default Cards;
import React, { Component } from 'react';
// import picture1 from '../images/picture1.jpg';
// import picture2 from '../images/picture2.jpg';
// import picture3 from '../images/picture3.jpg';

import Assets from '../helper/Assets';

class Gallery extends Component {

    render() {
        return (
            <div className="container mt-5">
                <h3>Image Gallery</h3>
                <hr />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={Assets.picture1} alt="Picture 1" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={Assets.picture2} alt="Picture 2" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={Assets.picture3} alt="Picture 3" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;
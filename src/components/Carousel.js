import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://www.nathanhotel.com/uploads/MPT_2.jpg" className="d-block w-100" alt="..." height = "600px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.adorama.com/alc/wp-content/uploads/2018/12/smarthome-devices-shutterstock-701872057-1024x464.jpg" className="d-block w-100" alt="..." height = "600px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://3asmarthome.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-22742145/images/59a4025611da9pkl8hjo/smart-hotel-2_d600.jpg" className="d-block w-100" alt="..." height = "600px"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

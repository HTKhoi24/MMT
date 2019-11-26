import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/carousel_1.jpg" className="d-block w-100" alt="..." height = "600px" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/carousel_2.jpg" className="d-block w-100" alt="..." height = "600px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/carousel_3.jpg" className="d-block w-100" alt="..." height = "600px"/>
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

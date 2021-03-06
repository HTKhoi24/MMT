import React, { Component } from 'react'
import Carousel from './Carousel'
import Welcome from './Welcome'
import GoogleMap from './GoogleMap'
import Footer from './Footer'
import '../css/toTop.css'
import { animateScroll as scroll } from "react-scroll";
import Advantage from './Advantage'
import Ourtools from './Ourtools'
export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div>
                <Carousel/>
                {/* <Animate /> */}
                <Welcome/>
                <Advantage/>
                <Ourtools/>
                <GoogleMap />
                <Footer />
                <i
                className="backtotop fa fa-angle-double-up"
                onClick={this.scrollToTop} />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Welcome from './Welcome'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Carousel/>
                <Welcome/>
            </div>
        )
    }
}

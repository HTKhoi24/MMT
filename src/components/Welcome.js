import React, { Component } from 'react'
import '../css/Welcome.css'
import AOS from 'aos'
export default class Welcome extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000
        })
    }
    render() {
        return (
            <div className = "welcome" >
            <div className = "welcome-content" data-aos='flip-right'>
                <h2>BETTER. FASTER. <span>STRONGER.</span></h2>
                <p>
                Better Speed, Security, and Service. That’s what SmartRoom delivers. With a dedicated project manager, upload speeds at 5MB’s per second, and the most advanced multi-layered security of any other data room platform on the market, you can rely on SmartRoom to deliver a virtual data room experience that is second to none.
                </p>
            </div>
            </div>
        )
    }
}

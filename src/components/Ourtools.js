import React, { Component } from 'react'
import '../css/Ourtools.css'
import AOS from 'aos';
export default class Ourtools extends Component {

    componentDidMount(){
        AOS.init({
          duration : 2500
        })
      }
    render() {
        return (
            <div className="ourtools">
                <div className="ourtools-content">
                    <div className="row" data-aos='fade-right'>
                        <div className="col-4">
                            <img src="./img/tool1.png" alt="" />
                        </div>

                        <div className="col-8 toolcenterfa">
                            <div className="toolcenterchild">
                                <h1 className="text-center"><a href="https://lumi.vn/Nha-thong-minh-ct-10-43-multi-audio.html" target="_blank" rel="noopener noreferrer">Multi Audio</a></h1>
                                <p>A great device by Lumi with many preeminent gadgets that other devices don't have. Customers will experience music anywhere, be it the living room, bedroom, kitchen or even outside the outdoor dining area, ....</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos='fade-left'>
                    <div className="col-8 toolcenterfa">
                            <div className="toolcenterchild">
                                <h1 className="text-center"><a href="https://lumi.net.vn/thiet-bi-dien/cam-bien-phat-hien-chuyen-dong-lm-md/" target="_blank" rel="noopener noreferrer">Sensor Detect Movement</a></h1>
                                <p>A great device by Lumi with many preeminent gadgets that other devices don't have. Customers will experience music anywhere, be it the living room, bedroom, kitchen or even outside the outdoor dining area, ....</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <img src="./img/tool2.png" alt="" />
                        </div>
                    </div>
                    <div className="row" data-aos='fade-right'>
                        <div className="col-4">
                            <img src="./img/tool3.png" alt="" />
                        </div>

                        <div className="col-8 toolcenterfa">
                            <div className="toolcenterchild">
                                <h1 className="text-center"><a href="https://lumi.net.vn/thiet-bi-dien/bo-dieu-khien-trung-tam-lm-hc/" target="_blank" rel="noopener noreferrer">Central Controller</a></h1>
                                <p>The LM-HC central controller is the brain of the smart home, Zigbee's wireless communication technology allows:</p>
                                <ul>
                                    <li><i class="fa fa-tools mr-4"></i> Connect and manage electrical equipment, remote control works in the house</li>
                                    <li><i class="fa fa-tools mr-4"></i> Store configuration information, settings of users.</li>
                                    <li><i class="fa fa-tools mr-4"></i>Updating device status for users.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import '../css/googleMap.css'
export default class GoogleMap extends Component {
    render() {
        return (
            <section className="googleLocation">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.183576790243!2d106.67591348250428!3d10.763534069448628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1574738146148!5m2!1svi!2s" width="100%" height={460} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                   
                </div>
               
            </section>
        )
    }
}

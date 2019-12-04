import React, { Component } from 'react'
import '../css/Advantage.css'
export default class Advantage extends Component {
    render() {
        return (
            <div className="advantage text-center">
                <div className="advantage-content">
                    <h2>WORK <span>SMARTER</span>, NOT <span>HARDER.</span> </h2>
                    <p>SmartRoom provides more value than any other virtual data room provider on the market.</p>
                    <div className="advantage-row">
                        <div className="row">
                            <div className="col-4">
                                <div className="advantage-item">

                                    <i class="fas fa-hand-holding-usd"></i>
                                    <h4>LESS EFFORT</h4>
                                    <p>Reduce administrative redundancies by <span>30%</span></p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="advantage-item">
                                    <i className="fa fa-clock"></i>
                                    <h4>GREATER EFFICIENCY</h4>
                                    <p>Users save an average of <span>15 hours</span> per week on M&A due diligence. </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="advantage-item">
                                    <i className="fas fa-money-bill-alt"></i>
                                    <h4>BETTER VALUE</h4>
                                    <p>Companies estimate an annual ROI of <span>25%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Avatar } from 'antd';
import '../css/Profile.css';
import { Line } from 'react-chartjs-2';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { getUser, getData } from '../api/APIUtil';
// import { NONAME } from 'dns';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            temperature: [],
            humidity: [],
            numOfHuman: [],
            bulbState: []
        }
    }

    loadCurrentUser = () => {
        this.setState({
            isLoading: true
        });
        getUser().then(response => {
            this.setState({
                user: response,
                isLoading: false
            });
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    loadData = () => {
        this.setState({
            isLoading: true
        });
        let valueName, number;
        getData(valueName = 'TEMPERATURE', number = 10).then(response => {
            const temperature = this.state.temperature.slice();
            this.setState({
                temperature: temperature.concat(response),
                isLoading: false
            });
            console.log(this.state.temperature);
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.loadCurrentUser();
        this.loadData();
    }

    temperature = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#ff9a00');
        gradient.addColorStop(1, '#f9ff94');
        return {
            id: '1',
            labels: ['07-06-19', '08-06-19', '09-06-19', '10-06-19', '11-06-19', '12-06-19'],
            datasets: [{
                label: 'Your room temper',
                data: [20, 25, 23, 27, 21, 0],
                borderColor: '#f51000',
                backgroundColor: gradient,
            }
            ]
        }
    }

    humidity = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#0df4f1');
        gradient.addColorStop(1, '#ffffff');
        return {
            id: '2',
            labels: ['07-06-19', '08-06-19', '09-06-19', '10-06-19', '11-06-19', '12-06-19'],
            datasets: [{
                label: 'Your room humidity',
                data: [100, 26, 0, 211, 391, 111],
                borderColor: '#0eb2fb',
                backgroundColor: gradient,
            }]
        }
    }
    peopleInOut = [
        { date: '7/6/19', in: '100', out: '200', },
        { date: '6/7/19', in: '111', out: '222', },
        { date: '1/1/19', in: '123', out: '321', }

    ]
    lightOnOff = [
        { date: '7/6/19', on: '100', off: '200', },
        { date: '6/7/19', on: '111', off: '222', },
        { date: '1/1/19', on: '123', off: '321', }

    ]

    render() {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

          });
        return (
            <div className="profile-page container">
                {this.state.user ? (
                    <div className="user-detail">
                        <Avatar className="user-detail-avatar" src='https://img00.deviantart.net/2cb8/i/2013/117/7/a/assassins_avatar_by_multispeedking-d6380y4.png' />
                        <div className="user-summary">
                            <div className="full-name">{this.state.user.fullName}</div>
                            <div className="username">@{this.state.user.username}</div>
                            <div className="birthday">{this.state.user.birthday}</div>
                            <div className="email">{this.state.user.email}</div>
                            <div className="phone">{this.state.user.phone}</div>
                        </div>
                    </div>
                ) : null}
                <div className="mySensor">
                    <h2 className = "sensor-title">MY SENSORS</h2>
                    <div className="temper-sensor" >
                        <h3 data-aos="fade-right">Temperature Sensors</h3>
                        < Line className = 'temper-chart'
                        data={this.temperature}
                        height = {200}
                        options={{ maintainAspectRatio: false }}
                        data-aos="zoom-in" />
                    </div>
                    <div className="humid-sensor">
                        <h3 data-aos="fade-right">Humidity Sensors</h3>
                        < Line className = 'humid-chart'
                        data={this.humidity}
                        height = {200}
                        options={{ maintainAspectRatio: false }}
                        data-aos="zoom-in" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="people-sensor">
                                <h3 data-aos="fade-right">People In / Out</h3>
                                <VerticalTimeline>
                                    {this.peopleInOut.map((item, index) => (
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                                            contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)' }}
                                            date={item.date}
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        // icon={<StarIcon />}
                                        >
                                            <p>IN : {item.in}</p>
                                            <p>OUT : {item.out}</p>
                                        </VerticalTimelineElement>
                                    ))}
                                </VerticalTimeline>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="light-sensor">
                                <h3 data-aos="fade-right">Light On / Off</h3>
                                <VerticalTimeline>
                                    {this.lightOnOff.map((item, index) => (
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                                            contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)' }}
                                            date={item.date}
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        // icon={<StarIcon />}
                                        >
                                            <p>ON : {item.on}</p>
                                            <p>OFF : {item.off}</p>
                                        </VerticalTimelineElement>
                                    ))}
                                </VerticalTimeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

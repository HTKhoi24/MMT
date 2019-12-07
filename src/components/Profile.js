import React, { Component } from 'react';
import { Avatar } from 'antd';
import '../css/Profile.css';
import { Line } from 'react-chartjs-2';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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

    loadTempData = () => {
        this.setState({
            isLoading: true
        });
        let valueName = 'TEMPERATURE', number = 10;
        getData(valueName, number).then(response => {
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

    loadHumidData = () => {
        this.setState({
            isLoading: true
        });
        let valueName = 'HUMIDITY', number = 10;
        getData(valueName, number).then(response => {
            const humidity = this.state.humidity.slice();
            this.setState({
                humidity: humidity.concat(response),
                isLoading: false
            });
            console.log(this.state.humidity);
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    loadPeopleData = () => {
        this.setState({
            isLoading: true
        });
        let valueName = 'NUM_OF_HUMAN', number = 10;
        getData(valueName, number).then(response => {
            const numOfHuman = this.state.numOfHuman.slice();
            this.setState({
                numOfHuman: numOfHuman.concat(response),
                isLoading: false
            });
            console.log(this.state.numOfHuman);
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    loadBulbData = () => {
        this.setState({
            isLoading: true
        });
        let valueName = 'BULB_STATE', number = 10;
        getData(valueName, number).then(response => {
            const bulbState = this.state.bulbState.slice();
            this.setState({
                bulbState: bulbState.concat(response),
                isLoading: false
            });
            console.log(this.state.bulbState);
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.loadCurrentUser();
        this.loadTempData();
        this.loadHumidData();
        this.loadPeopleData();
        this.loadBulbData();
    }

    temperature = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#ff9a00');
        gradient.addColorStop(1, '#f9ff94');
        var label = [];
        this.state.temperature.forEach((item, index) => {
            label.push(item.time);
        })
        var data = [];
        this.state.temperature.forEach((item, index) => {
            data.push(item.data);
        })
        return {
            id: '1',
            labels: label,
            datasets: [{
                label: 'Your room temperature',
                data: data,
                borderColor: '#f51000',
                backgroundColor: gradient,
            }
            ]
        }
    }

    humidity = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#00acff');
        gradient.addColorStop(1, '#e8ffff');
        var label = [];
        this.state.humidity.forEach((item) => {
            label.push(item.time);
        })
        var data = [];
        this.state.humidity.forEach((item) => {
            data.push(item.data);
        })
        return {
            id: '2',
            labels: label,
            datasets: [{
                label: 'Your room humidity',
                data: data,
                borderColor: '#0eb2fb',
                backgroundColor: gradient,
            }]
        }
    };

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
                        <div className="user-summary container">
                            <div className="row">
                                <div className="col-lg-6 summary-col">
                                    <div className="full-name">{this.state.user.fullName}</div>
                                    <div className="username">@{this.state.user.username}</div>
                                    
                                </div>
                                <div className="col-lg-6 summary-col">
                                    <div className="birthday">Date Of Birth: {this.state.user.birthday}</div>
                                    <div className="email">Email: {this.state.user.email}</div>
                                    <div className="phone">Phone: {this.state.user.phone}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="mySensor">
                    <h2 className="sensor-title">MY SENSORS' DATA</h2>
                    <div className="temper-sensor" >
                        <h3 data-aos="fade-right">Temperature Sensors</h3>
                        < Line className='temper-chart'
                            data={this.temperature}
                            height={250}
                            options={{ maintainAspectRatio: false }}
                            data-aos="fade-right"/>
                    </div>
                    <div className="humid-sensor">
                        <h3 data-aos="fade-right">Humidity Sensors</h3>
                        < Line className='humid-chart'
                            data={this.humidity}
                            height={200}
                            options={{ maintainAspectRatio: false }}
                            data-aos="zoom-in" />
                    </div>
                    <div className="people-sensor">
                        <h3 data-aos="fade-right">People - History</h3>
                        <Element name="people-timeline" className="element" id="containerElement" style={{
                            position: 'relative',
                            height: '300px',
                            overflow: 'scroll',
                            marginBottom: '100px'
                        }}>
                            <VerticalTimeline>
                                {this.state.numOfHuman.map((item, index) => (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                                        contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)' }}
                                        date={item.time}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    // icon={<StarIcon />}
                                    >
                                        <p>NUMBER OF PEOPLE : {item.data}</p>
                                    </VerticalTimelineElement>
                                ))}
                            </VerticalTimeline>
                        </Element>
                    </div>
                    <div className="light-sensor">
                        <h3 data-aos="fade-right">Lighting - History</h3>
                        <Element name="light-timeline" className="element" id="containerElement" style={{
                            position: 'relative',
                            height: '300px',
                            overflow: 'scroll',
                            marginBottom: '100px'
                        }}>
                            <VerticalTimeline>
                                {this.state.bulbState.map((item, index) => (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                                        contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)' }}
                                        date={item.time}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    // icon={<StarIcon />}
                                    >
                                        <p>STATE OF LIGHTING : {item.data}</p>
                                    </VerticalTimelineElement>
                                ))}
                            </VerticalTimeline>
                        </Element>
                    </div>
                </div>
            </div>
        );
    }
}

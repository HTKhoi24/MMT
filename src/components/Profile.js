import React, { Component } from 'react';
import { Avatar } from 'antd';
import '../css/Profile.css';
import { Line } from 'react-chartjs-2';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { getUser } from '../api/APIUtil';
// import { NONAME } from 'dns';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false
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

    componentDidMount() {
        window.scrollTo(0, 0)
        this.loadCurrentUser();
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
    moisture = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#0df4f1');
        gradient.addColorStop(1, '#ffffff');
        return {
            id: '2',
            labels: ['07-06-19', '08-06-19', '09-06-19', '10-06-19', '11-06-19', '12-06-19'],
            datasets: [{
                label: 'Your room moist',
                data: [100, 26, 0, 211, 391, 111],
                borderColor: '#0eb2fb',
                backgroundColor: gradient,
            }]
        }
    }
    peopleInOut = [
        {
            date: '7/6/19',
            in: '100',
            out: '200',
        },
        {
            date: '6/7/19',
            in: '111',
            out: '222',
        },
        {
            date: '1/1/19',
            in: '123',
            out: '321',
        }

    ]
    lightOnOff = [
        {
            date: '7/6/19',
            on: '100',
            off: '200',
        },
        {
            date: '6/7/19',
            on: '111',
            off: '222',
        },
        {
            date: '1/1/19',
            on: '123',
            off: '321',
        }

    ]

    render() {
        return (
            <div className="profile-page">
                {this.state.user ? (
                    <div className="user-detail">
                        <Avatar className="user-detail-avatar" src='https://img00.deviantart.net/2cb8/i/2013/117/7/a/assassins_avatar_by_multispeedking-d6380y4.png' />
                        <div className="user-summary">
                            <div className="full-name">{this.state.user.fullName}</div>
                            <div className="username">@{this.state.user.username}</div>
                            <div className="email">{this.state.user.email}</div>
                        </div>
                    </div>
                ) : null}
                <div className="mySensor">
                    <h2>MY SENSORS</h2>
                    <div className="temper_sensor">
                        <h3>Temperature Sensors</h3>
                        < Line data={this.temperature}
                        height = {200}
                        options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="moist_sensor">
                        <h3>Moisture Sensors</h3>
                        < Line data={this.moisture}
                        height = {200}
                        options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="people_sensor">
                                <h3>People In / Out</h3>
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
                            <div className="light_sensor">
                                <h3>Light On / Off</h3>
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
            </div>
        );
    }
}
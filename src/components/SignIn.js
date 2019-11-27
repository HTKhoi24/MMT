import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/SignIn.css'
import { Form, Input, Button, Icon, notification } from 'antd'
import { login } from '../api/APIUtil';
import { ACCESS_TOKEN } from '../constant';

export default class SignIn extends Component {
    render() {
        const SignIn = Form.create()(SigninForm)
        return (
            <div>
                <SignIn onLogin={this.props.onLogin} />
            </div>
        )
    }
}
class SigninForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                .then(response => {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.props.onLogin();
                }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'Smart Room',
                            description: 'Username or Password was wrong. Please try again!'
                        });
                    } else {
                        notification.error({
                            message: 'Smart Room',
                            description: error.message || 'Have error. Please try again!'
                        });
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signin-container">
                <div className="signin-form">
                    <h1>Sign In</h1>
                    <Icon type="user" className="iconUserSignIn"/>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }]
                            })(<Input
                                size="large"
                                prefix={<Icon type="user" />}
                                placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }]
                            })(<Input.Password
                                size="large"
                                prefix={<Icon type="lock" />}
                                placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" className="signin-form-button">Sign In</Button>
                        </Form.Item>
                    </Form>
                    or <Link to="/signup">Register now!</Link>
                </div>
            </div>
        );
    }
}

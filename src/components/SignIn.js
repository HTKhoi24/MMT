import React, { Component } from 'react'
import Header from './Header'
import '../css/SignIn.css'
import '../css/mystyle.css'
import { Form, Input, Button, Icon, DatePicker } from 'antd'

export default class SignIn extends Component {
    render() {
        const SignIn = Form.create()(SigninForm)
        return (
            <div>
                <SignIn />
            </div>
        )
    }
}
class SigninForm extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header/>
                <div className="signup-container">
                    <div className="signup-form">
                        <h1>Sign In</h1>
                        <Icon type="user" className="iconUserSignIn"/>
                        <Form>
                            
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
                                <Button type="primary" htmlType="submit" size="large" className="signup-form-button">Sign Up</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

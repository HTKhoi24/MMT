import React, { Component } from 'react'
import '../css/SignUp.css'
import { Form, Input, Button, Icon, DatePicker } from 'antd'

export default class SignUp extends Component {
    render() {
        const SignUp = Form.create()(SignupForm)
        return (
            <div>
                <SignUp />
            </div>
        )
    }
}

class SignupForm extends Component {
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signup-container">
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    <Form>
                        <Form.Item>
                            {getFieldDecorator('fullname', {
                                rules: [{ required: true, message: 'Please input your full name!' }]
                            })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="edit" />}
                                    placeholder="Full Name" />
                            )}
                        </Form.Item>
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
                        <Form.Item hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password
                                size="large"
                                prefix={<Icon type="lock" />}
                                placeholder="Confirm Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid Email!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ],
                            })(<Input
                                size="large"
                                prefix={<Icon type="mail" />}
                                placeholder="Email" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }]
                            })(<Input
                                size="large"
                                prefix={<Icon type="phone" />}
                                placeholder="Phone Number" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('birthday', {
                                rules: [{ required: true, message: 'Please pick your birthday!' }]
                            })(
                                <DatePicker
                                    size="large"
                                    placeholder="Date Of Birth"
                                    prefix={<Icon type="calendar" />} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" className="signup-form-button">Sign Up</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}


import React, { Component } from 'react'
import Header from './Header'
import '../Css/mystyle.css'

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => { //Object.values tra ve 1 mang cac thuoc tinh dem duoc trong doi tuong
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(val => {
        val === '' && (valid = false)
    })
    return valid
}
const phoneNumberRegex = RegExp(/(09|01[2|6|8|9])+([0-9]{8})\b/g)
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            userName: '',
            passWord: '',
            phoneNumber: '',
            birthDay: '',
            formErrors: {
                fullName: '',
                email: '',
                userName: '',
                passWord: '',
                phoneNumber: '',
                birthDay: '',
            }
        }
    }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({
            [evt.target.name]: evt.target.value
        })
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'fullName':
                formErrors.fullName = value.length < 3 && value.length > 0
                    ? '*Minimum 3 characters required*'
                    : ''
                break;
            case 'userName':
                formErrors.userName = value.length < 10 && value.length > 0
                    ? '*Minimum 10 characters required*'
                    : ''
                break;
            case 'email':
                formErrors.email = emailRegex.test(value)
                    ? ''
                    : '*Invalid email address*'
                break;
            case 'passWord':
                formErrors.passWord = value.length < 6 && value.length > 0
                    ? '*Minimum 6 characters required*'
                    : ''
                break;
            case 'phoneNumber':
                formErrors.phoneNumber = phoneNumberRegex.test(value)
                    ? ''
                    : '*Invalid phone nummber*'
                break;
            default:
        }
        this.setState({ formErrors, [name]: value })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        if (formValid(this.state)) {
            console.log('Submit thanh cong');
            console.log(this.state) // Tra ve server
        } else {
            console.log('Submit that bai - form invalid');
            console.log(this.state)
            alert('Điền đàng hoàng vô cho tao')
        }
    }
    render() {
        const { formErrors } = this.state
        return (
            <div className="signUpForm">
                <Header />
                <div className="containerform">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="text-center h1Signup">Sign Up</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Full Name</label>
                                    <div class="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i class="fa fa-dice-d20"></i></div>
                                        </div>
                                        <input type="text" className="form-control"
                                            placeholder="Fullname"
                                            name="fullName"
                                            value={this.state.fullName}
                                            onChange={this.handleChange} />

                                    </div>
                                    {formErrors.fullName.length > 0 && (
                                        <span className="errorMessage">{formErrors.fullName}</span>
                                    )}
                                    {this.state.fullName === '' && (
                                        <span className="errorMessage">*Fullname is not empty*</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Phone Number</label>
                                    <div class="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i class="fa fa-phone-volume"></i></div>
                                        </div>
                                        <input type="tel" className="form-control"
                                            placeholder="Phone Number"
                                            name="phoneNumber"
                                            value={this.state.phoneNumber}
                                            onChange={this.handleChange} />
                                    </div>
                                    {formErrors.phoneNumber.length > 0 && (
                                        <span className="errorMessage">{formErrors.phoneNumber}</span>
                                    )}
                                    {this.state.phoneNumber === '' && (
                                        <span className="errorMessage">*Phone number is not empty*</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Username</label>
                            <div class="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i class="fa fa-user"></i></div>
                                </div>
                                <input type="text" className="form-control"

                                    placeholder="Username"
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.handleChange} />
                            </div>
                            {formErrors.userName.length > 0 && (
                                <span className="errorMessage">{formErrors.userName}</span>
                            )}
                            {this.state.userName === '' && (
                                <span className="errorMessage">*Username is not empty*</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <div class="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i class="fa fa-key"></i></div>
                                </div>
                                <input type="password" className="form-control"

                                    placeholder="Password"
                                    name="passWord"
                                    value={this.state.passWord}
                                    onChange={this.handleChange} />
                            </div>
                            {formErrors.passWord.length > 0 && (
                                <span className="errorMessage">{formErrors.passWord}</span>
                            )}
                            {this.state.passWord === '' && (
                                <span className="errorMessage">*Password is not empty*</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <div class="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i class="fa fa-envelope"></i></div>
                                </div>
                                <input type="email" className="form-control"

                                    placeholder="Enter Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </div>
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                            {this.state.email === '' && (
                                <span className="errorMessage">*Email is not empty*</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Birthday</label>
                            <div class="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i class="fa fa-calendar-alt"></i></div>
                                </div>
                                <input type="date" className="form-control"

                                    placeholder="dd/mm/yyyy"
                                    name="birthDay"
                                    value={this.state.birthDay}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btnSignUp">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}



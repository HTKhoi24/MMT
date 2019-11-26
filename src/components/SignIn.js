import React, { Component } from 'react'
import Header from './Header'
import '../Css/mystyle.css'

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    Object.values(formErrors).forEach(val => { //Object.values tra ve 1 mang cac thuoc tinh dem duoc trong doi tuong
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(val => {
        val === '' && (valid = false)
    })
    return valid
}

export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            passWord: '',
            formErrors: {
                userName: '',
                passWord: '',
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
            case 'userName':
                formErrors.userName = value.length < 10 && value.length > 0
                    ? '*Minimum 10 characters required*'
                    : ''
                break;
            case 'passWord':
                formErrors.passWord = value.length < 6 && value.length > 0
                    ? '*Minimum 6 characters required*'
                    : ''
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
            <div className = "signInForm">
                <Header />
                <div className="containerform" >
                    <h1 className = "text-center signInTitle">Sign In</h1>
                    <div className="userIcon">
                    <i class="fas fa-user" ></i>
                    </div>
                        <form onSubmit={this.handleSubmit}>
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
                        </div>
                        <button type = "submit" className="btn btn-primary btnSignIn">Sign In</button>
                        </form>
                        
                </div>
            </div>
        )
    }
}

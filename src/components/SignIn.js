import React, { Component } from 'react'
import Header from './Header'

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhMhIDOAWtXwvsVwiNGcmUMwtwPFuZN09Zof2B-HgsGqsCPhL&s" className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                            <label>Username : </label>
                            <input type="text" className="form-control" name="userName" placeholder = "Username"/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" className="form-control" name="password" placeholder = "Password"/>
                        </div>
                        </form>
                        <a href="#" className="btn btn-primary">Sign In</a>
                    </div>
                </div>
            </div>
        )
    }
}

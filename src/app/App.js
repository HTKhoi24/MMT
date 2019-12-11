import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Layout, notification } from 'antd';

import AppHeader from '../components/AppHeader'
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';

import { getUser } from '../api/APIUtil';
import { ACCESS_TOKEN } from '../constant';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
  }

  loadCurrentUser = () => {
    this.setState({
      isLoading: true
    });
    getUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  handleSignUp = () => {
    notification.success({
      message: 'Smart Room',
      description: "You're successfully registered. Please Login to continue!",
    });
    this.props.history.push("/signin");
  }

  handleLogin = () => {
    notification.success({
      message: 'Smart Room',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push("/");
    notification.success({
      message: 'Smart Room',
      description: "You're successfully logged out.",
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  render() {
    return (
      <Layout>
        <AppHeader className="App-header"
          isAuthenticated={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout} >
          <p>Chika Smarthome</p>
        </AppHeader>
        <Content>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/SignIn"
              render={(props) => <SignIn onLogin={this.handleLogin} {...props} />}></Route>
            <Route exact path="/SignUp"
              render={(props) => <SignUp onSignUp={this.handleSignUp} {...props} />}></Route>
            <Route path="/user/:username"
              render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props} />}>
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);

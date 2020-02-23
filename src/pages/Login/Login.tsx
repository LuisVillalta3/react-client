import React, { Component } from 'react';
import LoginForm from '../../components/Login/LoginForm';

import './Login.scss';

class Login extends Component {
  render() {
    return(
      <div className="login-1">
        <div className="container">
          <div className="row align-center align-middle">
            <div className="columns small-24 medium-10 large-8">
              <h1>Inicia Sesión</h1>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
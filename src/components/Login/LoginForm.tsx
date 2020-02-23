import React, { Component } from 'react';
// import axios from 'axios';

// import { User } from '../../models/User';

import './LoginForm.scss';

class LoginForm extends Component {

  // constructor(props: any) {
  //   super(props);
  // }

  // handleChange(event: any) {
  //   this.setState({value: event.target.value});
  // }

  render() {
    return (
      <form>
        <div className="alert-danger"></div>
        <div className="control">
          <label>Correo electrónico:</label>
          <input type="email" required />
        </div>
        <div className="control">
          <label>Contraseña:</label>
          <input type="password" required />
        </div>
        <button className="btn btn-success" type="submit">Ingresar</button>
      </form>
    );
  }
}

export default LoginForm;
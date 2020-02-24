import React, { Component } from 'react';
import { IState } from '../../interfaces/IState';
import { IProps } from '../../interfaces/IProps';

import { User } from '../../models/User';

import './LoginForm.scss';

class LoginForm extends Component<IProps,IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      error: false,
      email: '',
      password: '',
      users: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event: any): void {
    const target = event.target;
    const value  = target.value;
    const name   = target.name;
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit(ev: any): void {
    ev.preventDefault();
    const api = 'http://127.0.0.1:5000/api/users';
    fetch(api)
      .then(res => res.json)
      .then(
        (result) => {
          this.setState({
            users: result
          })
        },
        (error) => {
          console.log(error);
        }
      )
    this.state.users.forEach(el => {
      if (this.state.email === el.email && this.state.password === el.password) {
        
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="alert-danger"></div>
        <div className="control">
          <label>Correo electrónico:</label>
          <input name="email" type="email" onChange={this.handleInputChange} value={this.state.email} required />
        </div>
        <div className="control">
          <label>Contraseña:</label>
          <input name="password" type="password" onChange={this.handleInputChange} value={this.state.password} required />
        </div>
        <button className="btn btn-success" type="submit">Ingresar</button>
      </form>
    );
  }
}

export default LoginForm;
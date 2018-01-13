import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import axios from '../../axios-base';
import './Login.css';

class Login extends Component {
    state = {
        name: '',
        birthyear: '',
        invalidCredentials: false
    }

    loginWarrior = (event) => {
        event.preventDefault();
        const { history } = this.props;
        const { dispatch } = this.props;

        if(this.state.name !== '' && this.state.birthyear !== '') {
            dispatch(userActions.login(this.state.name, this.state.birthyear));
        axios.get('people/?search=' + this.state.name)
            .then((res) => {
                if(res.data.results.length > 0 && 
                    res.data.results[0].name === this.state.name && 
                    res.data.results[0].birth_year === this.state.birthyear) {
                    history.push('/planets');
                } else {
                    this.setState({invalidCredentials: true})
                }
            })
            .catch((error) => {
                this.setState({invalidCredentials: true})
            });
        } else {
            this.setState({invalidCredentials: true})
        }
    }

    render() {
        return (
            <div className="login">
                <h3>Login Warrior!!!</h3>
                <form onSubmit={this.loginWarrior}>
                    <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                    <input type="password" className="form-control" placeholder="Birth Year" value={this.state.birthyear} onChange={(event) => this.setState({birthyear: event.target.value})} />
                    <button className="btn btn-success">Login</button>
                    { this.state.invalidCredentials ? <div className="error">Invalid Credentials</div>: null }
                </form>
            </div>
        )
    }
}

export default connect()(Login);
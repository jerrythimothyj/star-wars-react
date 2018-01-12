import React, { Component } from 'react';
import Login from './components/Login/Login'

class Landing extends Component {
    loginWarrior = () => {
        console.log('came here');
    }

    render() {
        return (
            <Login click={this.loginWarrior} />
        );
    }
}
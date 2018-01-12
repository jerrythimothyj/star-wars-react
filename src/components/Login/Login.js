import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    state = {
        name: '',
        birthyear: ''
    }

    loginWarrior = () => {
        const { history } = this.props;

        axios.get('https://swapi.co/api/people/?search=' + this.state.name)
            .then((res) => {
                if(res.data.results.length > 0 && 
                    res.data.results[0].name === this.state.name && 
                    res.data.results[0].birth_year === this.state.birthyear) {
                    history.push('/planets');
                } else {
                    console.log('invalid user');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="login">
                <h3>Login Warrior!!!</h3>
                <form>
                    <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                    <input type="password" className="form-control" placeholder="Birth Year" value={this.state.birthyear} onChange={(event) => this.setState({birthyear: event.target.value})} />
                    <button type="button" className="btn btn-success" onClick={this.loginWarrior}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
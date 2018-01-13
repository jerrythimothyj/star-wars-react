import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { userActions } from '../../_actions';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    // state = {
    //     name: '',
    //     birthyear: '',
    //     invalidCredentials: false
    // }

    // loginWarrior = (event) => {
    //     event.preventDefault();
    //     const { history } = this.props;
    //     const { dispatch } = this.props;

    //     if(this.state.name !== '' && this.state.birthyear !== '') {
    //         dispatch(userActions.login(this.state.name, this.state.birthyear));
    //     axios.get('people/?search=' + this.state.name)
    //         .then((res) => {
    //             if(res.data.results.length > 0 && 
    //                 res.data.results[0].name === this.state.name && 
    //                 res.data.results[0].birth_year === this.state.birthyear) {
    //                 history.push('/planets');
    //             } else {
    //                 this.setState({invalidCredentials: true})
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({invalidCredentials: true})
    //         });
    //     } else {
    //         this.setState({invalidCredentials: true})
    //     }
    // }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login">
                <h3>Login Warrior!!!</h3>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" placeholder="Name" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" placeholder="Birthyear" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Birthyear is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps)(Login));
export { connectedLoginPage as Login }; 
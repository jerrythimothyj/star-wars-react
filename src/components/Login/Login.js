import React from 'react';
import './Login.css';

const login = (props) => {
    return (
        <div className="login">
            <h3>Login Warrior!!!</h3>
            <form>
                <input type="text" className="form-control" placeholder="Name" />
                <input type="password" className="form-control" placeholder="Birth Year" />
                <button type="button" className="btn btn-success" onClick={props.click}>Login</button>
            </form>
        </div>
    )
}

export default login;
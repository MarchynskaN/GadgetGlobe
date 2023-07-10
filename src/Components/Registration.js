import React, { Component} from 'react';
import {NavLink } from 'react-router-dom';

class Registration extends Component {   
    render() { 
        return (
            <div className='profile'>
                <h1>Register</h1>
                <label>User Name</label><br/>
                <input type='text'/>
                <br/><br/><br/>
                <label>Email address</label><br/>
                <input type='text'/>
                <br/><br/><br/>
                <label>Password</label><br/>
                <input type='password'/>
                <br/><br/><br/>
                <div>
                <button type='submit'>Sign Up</button>
                <NavLink to="/profile" ><span>Already have an account &gt;</span></NavLink>
                </div>
            </div>
        );
    }
}

export default Registration;
import React, { Component} from 'react';
import {NavLink } from 'react-router-dom';

class Profile extends Component {    
  
  render() {
    return (
      <div className='profile'>
        <h1>Sign In</h1>
        <label>Email address</label><br/>
        <input type='text'/>
        <br/><br/><br/>
        <label>Password</label><br/>
        <input type='password'/>
        <br/><br/><br/>
        <button type='submit'>Sign In</button>
          <NavLink to="/registration"><span>Create an account &gt;</span></NavLink>
      </div>
    );
  }
}

export default Profile;
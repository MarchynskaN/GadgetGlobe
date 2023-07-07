import React, { Component } from 'react';
import './index.css';
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
      </div>
    );
  }
}

export default Profile;
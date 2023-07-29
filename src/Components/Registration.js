// import React, { Component} from 'react';
import {NavLink } from 'react-router-dom';

// class Registration extends Component {   
//     render() { 
//         return (
//             <div className='profile'>
//                 <h1>Register</h1>
//                 <label>User Name</label><br/>
//                 <input type='text'/>
//                 <br/><br/><br/>
//                 <label>Email address</label><br/>
//                 <input type='text'/>
//                 <br/><br/><br/>
//                 <label>Password</label><br/>
//                 <input type='password'/>
//                 <br/><br/><br/>
//                 <div>
//                 <button type='submit'>Sign Up</button>
//                 <NavLink to="/profile" ><span>Already have an account &gt;</span></NavLink>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Registration;


import React, { Component } from 'react';

class Registration extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      const data = await response.json();
      
      if (response.ok) {
        alert(data.message); // Display success message from the server
        // Perform any additional actions upon successful registration
      } else {
        alert(data.error); // Display specific error message from the server
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register user. Please try again later.'); // Display a generic error message for unexpected errors
    }
  };

  render() {
    return (
      <div className='profile'>
        <h1>Register</h1>
        <form action="/register" method="post"onSubmit={this.handleSubmit}>
          <label>User Name</label><br />
          <input type='text' name='username' />
          <br /><br /><br />
          <label>Email address</label><br />
          <input type='text' name='email' />
          <br /><br /><br />
          <label>Password</label><br />
          <input type='password' name='password' />
          <br /><br /><br />
          <div>
            <button type='submit'>Sign Up</button>
            <NavLink to="/profile" ><span>Already have an account &gt;</span></NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;

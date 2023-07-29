import React, { Component} from 'react';
 import {NavLink } from 'react-router-dom';


// Frontend code (Registration.js or separate Login.js component)

class Profile extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display success message from the server
        // Perform any additional actions upon successful login
      } else {
        alert(data.error); // Display error message from the server
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to log in. Please try again later.'); // Display a generic error message for unexpected errors
    }
  };

  render() {
    return (
      <div className='profile'>
        <h1>Login</h1>
        <form action="/login" method="post" onSubmit={this.handleSubmit}>
          <label>Email address</label><br />
          <input type='text' name='email' />
          <br /><br /><br />
          <label>Password</label><br />
          <input type='password' name='password' />
          <br /><br /><br />
          <div>
            <button type='submit'>Log In</button>
            <NavLink to="/registration"><span>Create an account &gt;</span></NavLink>
          </div>
        </form>
      </div>
    );
  }
}

// export default Login;

// class Profile extends Component {    
  
//   render() {
//     return (
//       <div className='profile'>
//         <h1>Sign In</h1>
//         <label>Email address</label><br/>
//         <input type='text'/>
//         <br/><br/><br/>
//         <label>Password</label><br/>
//         <input type='password'/>
//         <br/><br/><br/>
//         <button type='submit'>Sign In</button>
//           <NavLink to="/registration"><span>Create an account &gt;</span></NavLink>
//       </div>
//     );
//   }
// }

export default Profile;
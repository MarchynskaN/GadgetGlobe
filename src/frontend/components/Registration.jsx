import React, { useState, useEffect } from "react";
import AuthService from "../services/authService";

export const Registration = () => {
  const [message, setMessage] = useState('');

    const registerClick = (event) => {
      event.preventDefault();

      const userName = event.target.elements.userName.value || "";
      const email = event.target.elements.email.value || "";
      const password = event.target.elements.password.value || "";
      const confirmPassword = event.target.elements.confirmPassword.value || "";
     const statusMessage = document.querySelector("#statusMessage")

      statusMessage.style.color = 'red';

      if (userName === "") {
        setMessage('Please enter user name');
        return
      } else if (email === "") {
        setMessage('Please enter email');
        return
      } else if (password === "") {
        setMessage('Please enter password');
        return
      } else if (password !== confirmPassword) {
        setMessage('Password and confirm password do not match');
        return
      } else {
        statusMessage.style.color = 'green';
        setMessage('Validation Successful');
      }

      const userRegisterRequest = {
        userName,
        email,
        password,
        confirmPassword,
      };

      AuthService.register(userRegisterRequest)
      .then(response => {
        let user = response.data
        console.log(user)
        event.target.reset()
        setMessage('User Created Successfully');

      })
      .catch(error => {
        statusMessage.style.color = 'red';
        console.log(error.response.data);
        setMessage(error.response.data);
      })
  }

  return (
    <div className="text-center">
      <div className="inner">
        <form onSubmit={registerClick}>
          <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
          <div className="form-group">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="user name"
                name="userName"
              />
              <label htmlFor="floatingInput">UserName</label>
            </div>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"/>
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="password" name="password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="confirm password" name="confirmPassword" />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" className="box" />
            <label className="checkbox-primary"> I accept the Terms of Use & Privacy Policy </label>
          </div>

          <input value="Submit" className="w-100 btn btn-lg btn-primary bg-dark" type="submit" />
        </form>
        <div id="statusMessage" style={{ color: 'red' }}>{message}</div>
      </div>
    </div>
  );
};
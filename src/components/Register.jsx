import React from 'react';

const Register = () => (
  <div className="container">
    <form>
      <h1>Register</h1>
      <div className="inputs">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <button type="submit">Login</button>
      <p>
        Don’t have an account yet?
        {' '}
        <a href="/register">Register</a>
      </p>
    </form>
  </div>
);

export default Register;

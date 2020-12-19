import React from 'react';

const Login = () => (
  <div className="container">
    <form>
      <h1>Login</h1>
      <div className="inputs">
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

export default Login;

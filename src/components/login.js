import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <input type="email" />
      <input type="password" />
      <button class="waves-effect cyan darken-1 btn-small" type="submit">Login</button>
      <p>New to our site? Click HERE to create an account!</p>
    </div>
  )
}

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
  const handleLogin = () => {
    // Handle login logic here
    navigate('/home')
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="container" style={{alignItems:"center",marginTop:"150px"}}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">Admin Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Username</label>
             <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Password</label>
             
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <a href='/changepassword' className="text-muted" >Forgot Password?</a>
            </div>
            <button
              type="button"
              className="btn btn-primary w-25"
              onClick={handleLogin}
              style={{ textAlign: 'left', display: 'block' }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

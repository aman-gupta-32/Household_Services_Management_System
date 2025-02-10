import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const handleSubmit = () => {
    navigate('/')
    console.log('Details:', { email, newPassword, reEnterPassword });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="text-center">Change Password</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email" style={{ textAlign: 'left', display: 'block' }}>Email ID</label>
              
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="newPassword"  style={{ textAlign: 'left', display: 'block' }}>New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>
            <br/>

            <div className="form-group">
              <label htmlFor="reEnterPassword"  style={{ textAlign: 'left', display: 'block' }}>Re-enter Password</label>
              <input
                type="password"
                className="form-control"
                id="reEnterPassword"
                placeholder="Re-enter new password"
                value={reEnterPassword}
                onChange={e => setReEnterPassword(e.target.value)}
              />
            </div>
            <br/>
           
            <button type="button" className="btn btn-primary w-25  d-grid col-6 mx-auto" onClick={handleSubmit} >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

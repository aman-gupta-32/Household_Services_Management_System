import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Appy = () => {
  return (
    <div style={{height: '70vh'}} className="d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{width: '400px'}}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appy;

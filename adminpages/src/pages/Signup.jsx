import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Appy = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <br/>
      <form style={{marginLeft:"20%"}}>
        <div className="row mb-3">
          <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control w-50" id="fullname" placeholder="Enter your full name" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="mobileno" className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <input type="text" className="form-control w-50" id="mobileno" placeholder="Enter your mobile number" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control w-50" id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input type="text" className="form-control w-50" id="address" placeholder="Enter your address" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control w-50" id="password" placeholder="Enter your password" />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Appy;

/*import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();  
  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <br />
      <form style={{ marginLeft: "20%" }}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone_no" className="col-sm-2 col-form-label">
            Mobile No
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="phone_no"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control w-50"
              id="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="address"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control w-50"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <br />
        <div className="text-center" style={{marginRight:"30%"}}>
          <button type="submit" className="btn btn-primary" onClick={()=>navigate('/login')}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerCustomer, registerServiceProvider } from "../services/AuthService";

function SignUp() {
  const navigate = useNavigate();
  
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
    address: "",
    password: "",
    role: "CUSTOMER",
    is_active:"YES",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      if (formData.role === "CUSTOMER") {
        await registerCustomer(formData);
      } else {
        await registerServiceProvider(formData);
      }
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert("Signup Failed: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <br />
      <form style={{ marginLeft: "20%" }}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
             Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="phone_no" className="col-sm-2 col-form-label">
            Mobile No
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="phone_no"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control w-50"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-50"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control w-50"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {/* User Type Selection */}
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">User Type</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value="CUSTOMER"
                checked={formData.role === "CUSTOMER"}
                onChange={handleChange}
              />
              <label className="form-check-label">Customer</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value="SERVICE_PROVIDER"
                checked={formData.role === "SERVICE_PROVIDER"}
                onChange={handleChange}
              />
              <label className="form-check-label">Service Provider</label>
            </div>
          </div>
        </div>

        <br />
        <div className="text-center" style={{ marginRight: "30%" }}>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

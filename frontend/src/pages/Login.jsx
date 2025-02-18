import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import { loginUser } from "../services/AuthService";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const role = searchParams.get("role");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    console.log("This is login!!!");
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      console.log(response.role);
      if (response.status == "success") {
        localStorage.setItem("userId", response.id);
        localStorage.setItem("role", response.role);

        if (response.role === "ROLE_SERVICEPROVIDER") {
          navigate("/servicelist");
        } else {
          navigate("/services");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div
      style={{ height: "70vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3" style={{ textAlign: "left" }}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3" style={{ textAlign: "left" }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

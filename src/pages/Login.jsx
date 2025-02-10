import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


import { useState } from "react";
import { loginUser } from "../services/AuthService";

function Login() {
//  const location = useLocation();
//  const searchParams = new URLSearchParams(location.search);
//  const role = searchParams.get("role");

  {
    /*
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid black", margin: "auto", padding: "20px" }}>
      <h2>Log In</h2>
      <div style={{ margin: "auto" }}>
        <label for="username" style={{ "margin-right": "10px" }}>
          Username{" "}
        </label>
        <input type="text" id="username" name="username" />
      </div>
      <br />
      <div>
        <label for="username" style={{ "margin-right": "10px" }}>
          Password{" "}
        </label>
        <input type="password" id="pw" name="password" />
      </div>
      <br />
      <button
        type="submit"
        style={{ "margin-right": "20px" }}
        class="submit-btn"
        onClick={() => {
          role == "sp" ? navigate("/servicelist") : navigate("/services");
        }}
      >
        Login
      </button>
      <button type="submit" class="submit-btn">
        Signup
      </button>
    </div>
  );
}

*/
  }

  /*const navigate = useNavigate();

  return (
    <div
      style={{ height: "70vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3" style={{textAlign:"left"}}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3" style={{textAlign:"left"}}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                role == "sp" ? navigate("/servicelist") : navigate("/services");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );*/

 // Import login service
  
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const role = searchParams.get("role"); // Get role from URL params
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await loginUser(email, password); // Call backend API
        
        if (response.success) {
          localStorage.setItem("userId", response.data.id); // Store user ID
          localStorage.setItem("role", response.data.role); // Store user role
  
          if (response.data.role === "SERVICE_PROVIDER") {
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
  









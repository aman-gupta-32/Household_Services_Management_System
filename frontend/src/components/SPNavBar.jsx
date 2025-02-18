import { useNavigate } from "react-router-dom";
import profileImg from "../assets/7179048.png";
function SPNavBar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg    navbar-dark bg-primary container-fluid ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          ServiceProvider
        </a>
        {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/servicelist">
                ServicesList
              </a>
            </li>
          </ul>
          <img
            style={{ width: "50px", cursor: "pointer", marginLeft: "80%" }}
            src={profileImg}
            alt=""
            onClick={() => navigate("/spprofile")}
          />
        </div>
      </div>
    </nav>
  );
}

export default SPNavBar;

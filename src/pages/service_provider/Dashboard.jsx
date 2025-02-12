import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/7179048.png";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Homify
          </a>
          <img
            style={{ width: "50px", cursor: "pointer" }}
            src={profileImg}
            alt=""
            onClick={() => navigate("/spprofile")}
          />
        </div>
      </nav>
      <div className="container mt-5 pt-5">
        <h1 className="text-center">Dashboard</h1>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Money Earned</h5>
                <p className="card-text">₹50,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Orders Pending</h5>
                <p className="card-text">574</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/jobs")}
          >
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Jobs</h5>
                <p className="card-text">845</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Orders Done</h5>
                <p className="card-text">724</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Rating</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="circle bg-light border rounded-circle p-3">
                    <h1 className="m-0">4.5</h1>
                  </div>
                  <p className="ml-3">4.5/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5>Pending Orders</h5>
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text">Order details here</p>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text">Order details here</p>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text">Order details here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

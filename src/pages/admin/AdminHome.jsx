import img48 from "../../assets/7179048.png";
import img10 from "../../assets/11413110.png";

import NavBar from "../../components/NavBar";

function AdminHome() {
  return (
    <div>
      <center>
        <NavBar />
        <div
          class="d-flex  col-md-8  col-sm-8 col-xs-12 position-relative  "
          style={{ marginTop: "200px", marginLeft: "200px" }}
        >
          <div class="p-2" style={{ width: "200px", height: "200px" }}>
            <b></b>
          </div>

          <div
            class="p-2  position-absolute top-70 start-50 "
            style={{ width: "200px", height: "200px" }}
          >
            <a href="/serviceprovider">
              <img
                src={img48}
                style={{ width: "200px", height: "200px" }}
              ></img>
            </a>
            <b>service provider</b>
          </div>
          <div class="p-2" style={{ width: "200px", height: "200px" }}></div>

          <div
            class="p-2 position-absolute top-70 start-55 "
            style={{ width: "200px", height: "200px", textAlign: "center" }}
          >
            <a href="/customer">
              <img
                src={img10}
                style={{ width: "200px", height: "200px" }}
              ></img>
            </a>
            <b>customer</b>
          </div>
          <div class="p-2" style={{ width: "200px", height: "200px" }}></div>
        </div>
      </center>
    </div>
  );
}

export default AdminHome;

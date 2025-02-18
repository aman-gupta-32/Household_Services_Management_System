import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/7179048.png";
import NavBar from "../../components/NavBar";
import SPNavBar from "../../components/SPNavBar";
import { useEffect, useState } from "react";
import { totalAmount } from "../../services/ServiceProviderService";
import { pendingOrders } from "../../services/ServiceProviderService";
import { pendingDoneOrders } from "../../services/ServiceProviderService";
import { jobsRating } from "../../services/ServiceProviderService";

const Dashboard = () => {
  const navigate = useNavigate();
  //const [id , setId] =useState(0);
  const spid = localStorage.getItem("userId");
  const [earnings, setEarnings] = useState(0.0);
  const [totaljobs, setTotaljobs] = useState(0);
  const [pendingorder, setPendingorder] = useState(0);
  const [ordersdone, setOrdersdone] = useState(0);
  const [rating, setRating] = useState(0.0);
  const [pendinglist, setPendinglist] = useState([]);

  console.log(localStorage.getItem("userId") + "    constant data");
  //setId(localStorage.getItem("userId"));
  //console.log(id);
  const serviceprovider = async (id) => {
    try {
      const amt = await totalAmount(id);
      if (amt != 0) {
        setEarnings(amt.amount);
      }
      const orders = await pendingDoneOrders(id);
      if (orders != null) {
        setOrdersdone(orders.done);
        setPendingorder(orders.pending);
      }
      const rating = await jobsRating(id);
      if (rating != null) {
        setRating(rating.rating);
        setTotaljobs(rating.totalJobs);
      }
      const plist = await pendingOrders(id);
      if (plist != null) {
        setPendinglist(plist);
      }
    } catch (error) {
      throw error;
    }
  };

  // ([]);
  useEffect(() => {
    serviceprovider(spid);
  }, []);
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   if (userId) {
  //     setId(userId);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (id !== 0) {
  //     serviceprovider(id);
  //   }
  // }, []);
  return (
    <>
      <div>
        <SPNavBar />

        <div className="container mt-3 pt-3">
          <h1 className="text-center">Dashboard</h1>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Money Earned</h5>
                  <p className="card-text">{earnings}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Orders Pending</h5>
                  <p className="card-text">{pendingorder}</p>
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
                  <h5 className="card-title">Orders Done </h5>
                  <p className="card-text">{ordersdone}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Bookings</h5>
                  <p className="card-text">{totaljobs}</p>
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
                      <h1 className="m-0">{rating}</h1>
                    </div>
                    <p className="ml-3">{rating}/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h3>Pending Orders</h3>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Slot</th>
                <th>Date</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              {pendinglist.map((pendings) => (
                <tr key={pendings.id}>
                  <td>{pendings.name}</td>
                  <td>{pendings.price}</td>
                  <td>{pendings.bookingSlot}</td>
                  <td>{pendings.date}</td>
                  <td>{pendings.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* 
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
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getServiceProviders();
//         setServiceProviders(data);
//        // setFilteredServices(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

// Double totalAmount(Long Id);

// PendingAndDoneOrdersDTO ordersPendingDone(Long Id);

// JobsAndRatingDTO totalJobsAndRating(Long Id);

// List<PendingListDTO> getPendingOrders(Long Id);

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
      </nav> */
}

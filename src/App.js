import logo from "./logo.svg";
import "./App.css";
import AddToCart from "./pages/AddToCart";
import ServiceList from "./pages/ServiceList";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PaymentPage from "./pages/PaymentPage";
import Feedback from "./pages/Feedback";
import AdminLogin from "./pages/AdminLogin";
import ChangePassword from "./pages/ChangePassword";
import AdminHome from "./pages/AdminHome";
import Customers from "./pages/Customers";
import ServiceProvider from "./pages/ServiceProvider";
import ManageServiceProvider from "./pages/ManageServiceProvider";
import Bookings from "./pages/Bookings";
import MyJobs from "./pages/MyJobs";
import SPProfile from "./pages/SPProfile";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  const providerId = 3;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="services" element={<Services />} />
          <Route path="addtocart" element={<AddToCart />} />
          <Route path="cart" element={<Cart />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="adminhome" element={<AdminHome />} />
          <Route path="customer" element={<Customers />} />
          <Route path="serviceprovider" element={<ServiceProvider />} />
          <Route
            path="servicelist"
            element={<ServiceList providerId={providerId} />}
          />
          <Route path="jobs" element={<MyJobs />} />

          <Route path="spprofile" element={<SPProfile providerId={providerId} />} />

          <Route path="contactus" element={<ContactUs />} />

          <Route path="aboutus" element={<AboutUs />} />

          <Route
            path="manageserviceprovider"
            element={<ManageServiceProvider />}
          />
          <Route path="bookings" element={<Bookings />} />

          <Route path="adminhome" element={<AdminHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





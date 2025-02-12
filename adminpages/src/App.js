import './App.css';

import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ServiceProvider from './pages/ServiceProvider';
import Customers from './pages/Customers';
import AdminLogin from './pages/AdminLogin';
import ChangePassword from './pages/ChangePassword';
import ManageServiceProvider from './pages/ManageServiceProvider';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminProfile from './pages/Profile';
import Appy from './pages/Login';
import ServicesList from './pages/ServicesList';

function App() {
  return (
    <div>

    {/* //  <div className="App">*/}
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/serviceprovider' element={<ServiceProvider />} />
          <Route path='/manageserviceprovider' element={<ManageServiceProvider />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/serviceslist' element={<ServicesList />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/' element={<AdminLogin />} />
        </Routes>
      </Router> 
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      {/* <AdminProfile/> */}

      {/* <Appy/> */}
      {/* <AdminLogin/> */}
    </div>
  );
}

export default App;

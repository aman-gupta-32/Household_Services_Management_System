import img from '../images/OIP (7).jpeg';
function NavBar(){
// return (<nav className="navbar navbar-expand-lg navbar-transparent bg-primary container-fluid">
//         <a className="navbar-brand" href="/" style={{marginLeft:"5px"}}>Home</a>
// </nav>);

return (<nav class="navbar navbar-expand-lg navbar-transparent bg-primary container-fluid ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href='/home'>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='/manageserviceprovider'>Manage service provider</a>
          </li>
          <li class="nav-item"  align="right">
            <a class="nav-link" href='/bookings' >Bookings</a>
          </li>
          <li class="nav-item"  align="right">
            <a class="nav-link" href='/serviceslist' >Services</a>
          </li>
        </ul>
        <div  class="nav-item"  align="right" style={{marginLeft:"60%"}}>    
        <a class="nav-link" href='/profile' ><img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" style={{height:"50px", width:"50px"}}></img></a>
        </div>
      </div>
    </div>
  </nav>)
};

export default NavBar;
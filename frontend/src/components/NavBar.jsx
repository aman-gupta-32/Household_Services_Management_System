function NavBar() {
  // return (<nav className="navbar navbar-expand-lg navbar-transparent bg-primary container-fluid">
  //         <a className="navbar-brand" href="/" style={{marginLeft:"5px"}}>Home</a>
  // </nav>);

  return (
    <nav class="navbar navbar-expand-lg  navbar-transparent navbar-light bg-light container-fluid ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Admin
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/adminhome">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/manageserviceprovider">
                Manage service provider
              </a>
            </li>
            <li class="nav-item" align="right">
              <a class="nav-link" href="/bookings">
                bookings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

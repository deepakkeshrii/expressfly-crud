const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-nav">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand" to="/">
          <img 
            width="300" 
            height="100" 
            src="https://placehold.co/600x400" 
            className="img-fluid custom-logo" 
            alt="ExpressFly"
          />
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto">
                <span className="nav-item nav-link text-light">
                  Welcome, Deepak
                </span>
                <button
                  className="btn custom-btn ms-lg-2 mt-2 mt-lg-0"
                >
                  Logout
                </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

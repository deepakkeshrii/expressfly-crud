import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/images/expressfly-logo.png";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-nav">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            width="300" 
            height="100" 
            src={logo} 
            className="img-fluid custom-logo" 
            alt="ExpressFly"
          />
        </Link>

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
            {isAuthenticated ? (
              <>
                <span className="nav-item nav-link text-light">
                  Welcome, {user?.name}
                </span>
                <button
                  className="btn custom-btn ms-lg-2 mt-2 mt-lg-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

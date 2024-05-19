import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../store";
import { toast } from "react-toastify"
function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, search } = state;

  const logoutHandler = () => {
    const userName = userDetails?.user?.name || "User";
    navigate("/");
    toast.success(userName + " signed out successfully");
    localStorage.removeItem("userDetails");
    ctxDispatch({ type: "SIGN_OUT" });
  };

  const menuTextStyle = {borderBottom: "2px solid black", color: "black"}

  return (
    <div>
      <nav className="navbar navbar-expand navbar-lg navbar-light bg-light">
        <a href="#" className="navbar-brand">
          <img
            src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1715731200&semt=ais_user"
            style={{ height: "100px" , width: "100px", objectFit: "contain"}}
            alt="Logo"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item" style={menuTextStyle}>
              <Link to="/activity" className="nav-link">
                Activities
              </Link>
            </li>
            {userDetails?.user?.userType !== "customer" && (
              <li className="nav-item" style={menuTextStyle}>
                <Link
                  to={userDetails ? "/bookings" : "/user/sign-in"}
                  className="nav-link"
                >
                  Schedule a flight
                </Link>
              </li>
            )}
            {/* {userDetails?.user?.userType === "customer" && (
              <li className="nav-item" style={menuTextStyle}>
                <Link
                  to={userDetails ? "/bookings" : "/user/sign-in"}
                  className="nav-link"
                >
                  Book a flight
                </Link>
              </li>
            )}  */}
            {userDetails?.user?.userType !== "customer" && (
              <li className="nav-item" style={menuTextStyle}>
                <Link
                  to={userDetails ? "/flights" : "/user/sign-in"}
                  className="nav-link"
                >
                  Add a Flight
                </Link>
              </li>
            )}
              {userDetails?.user?.userType === "customer" && (
              <li className="nav-item" style={menuTextStyle}>
                <Link
                  to={userDetails ? "/flights" : "/user/sign-in"}
                  className="nav-link"
                >
                  Flights
                </Link>
              </li>
            )}
             {/* {userDetails?.user?.userType === "customer" && (
              <li className="nav-item" style={menuTextStyle}>
                <Link
                  to={userDetails ? "/check" : "/user/sign-in"}
                  className="nav-link"
                >
                  Available Schedules
                </Link>
              </li>
            )} */}
          </ul>
        </div>
        {/* <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        /> */}
        <ul>
          {userDetails && userDetails.user ? (
            <li className="nav-item">
              <Link to="#" onClick={logoutHandler} className="nav-link">
                Log out
              </Link>
            </li>
          ) : (
            <div className="auth-btn-container">
              <li className="nav-item">
                <Link to="/user/sign-in" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/sign-up" className="nav-link">
                  Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../actions/modalAction";
import { logout } from "../../actions/userActions";
import Login from "../Login";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandler = () => {
    dispatch(openModal("open", <Login />));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          className="header_logo"
          alt="logo"
        />
      </Link>
      <div className="header_center">
        <input type="text" />
        <Link to="search">
          <SearchIcon />
        </Link>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandler}>Log out</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={openModalHandler}>Log in</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;

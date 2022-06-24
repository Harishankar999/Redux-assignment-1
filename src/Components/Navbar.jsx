import React from "react";
import { Link } from "react-router-dom";
import styles from "../app.module.css";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
function Navbar() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={styles.navbar}>
      {/* Navbar */}
      <Link className={styles.Link} to="/counterapp">
        Counter App
      </Link>
      <Link className={styles.Link} to="/todoapp">
        TODO App
      </Link>
      <Link className={styles.link} to='/'>HOME</Link>
      <Link className={styles.link} to='/login'><button>{isAuth ? "LOGOUT":"LOGIN"}</button></Link>
    </div>
  );
}

export default Navbar;

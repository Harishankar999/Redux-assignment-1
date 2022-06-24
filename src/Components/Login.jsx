import React from "react";
import { useState } from "react";
import { login } from "../store/Login/login.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  // console.log(isAuth);
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
  };

  const navigateClick = () => {
    if (isAuth) {
      navigate("/todoapp");
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit" onClick={navigateClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

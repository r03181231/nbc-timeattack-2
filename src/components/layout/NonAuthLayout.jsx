import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    alert("이미 로그인 상태입니다.");
    <Navigate replace to="/" />;
    // ?
  }
  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;

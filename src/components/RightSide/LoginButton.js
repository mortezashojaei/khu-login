import React from "react";

const LoginButton = ({ successLogin }) => {
  return (
    <div className="container-login-form-btn">
      <button className="login-form-btn">
        {successLogin ? "خروج از حساب کاربری" : "ورود به حساب کاربری"}
      </button>
    </div>
  );
};

export default LoginButton;

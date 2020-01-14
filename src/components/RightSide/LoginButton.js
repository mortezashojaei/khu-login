import React from "react";

const LoginButton = ({ successLogin, isDisable }) => {
  return (
    <div className="container-login-form-btn">
      <button
        disabled={successLogin ? false : isDisable}
        className={`login-form-btn ${successLogin ? "bg-red" : ""}`}
      >
        {successLogin ? "خروج از حساب کاربری" : "ورود به حساب کاربری"}
      </button>
    </div>
  );
};

export default LoginButton;

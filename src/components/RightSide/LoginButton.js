import React from "react";

const LoginButton = ({ successLogin, isDisable, isLOading }) => {
  return (
    <div className="container-login-form-btn">
      <button
        disabled={successLogin ? false : isDisable}
        className={`login-form-btn ${successLogin ? "bg-red" : ""}`}
      >
        {successLogin
          ? "خروج از حساب کاربری"
          : !isLOading
          ? "ورود به حساب کاربری"
          : "...درحال اتصال"}
      </button>
    </div>
  );
};

export default LoginButton;

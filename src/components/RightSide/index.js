import React from "react";
import Input from "./Input";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import LinkToManagePassword from "./LinkToManagePassword";

const RightSide = () => {
    function sumbitLogin(e) {
        e.preventDefault();
      }
  return (
    <form onSubmit={sumbitLogin} className="login-form validate-form">
      <FormHeader />
      <Input type="number" label="شماره دانشجویی" />
      <Input type="number" label="شماره دانشجویی" />
      <LoginButton />
      <LinkToManagePassword />
    </form>
  );
};

export default RightSide;

import React from "react";

const Input = ({ value, onChange, type, label }) => {
  return (
    <div className="wrap-input validate-input">
      <input value={value} onChange={onChange} className="input" type={type} />
      <span className="focus-input"></span>
      <span className="label-input">{label}</span>
    </div>
  );
};

export default Input;

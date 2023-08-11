import React, { useState } from "react";
import showPasswordImage from "../../assets/images/show-password.png";
import { Body3 } from "../Typography";
import "./style.css";

const PasswordInput = ({
  className,
  name,
  label,
  value,
  onChange,
  required,
  placeholder,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => ({ show: !prev.show }));

  return (
    <div className={`my-input ${className ? className : ""}`}>
      <label className="my-input-label" htmlFor={name}>
        <Body3 className="text-gray-1">{label}</Body3>
      </label>
      <div className="password-input">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          required={required}
          placeholder={placeholder || label.toLowerCase()}
        />
        <div className={`show-password ${show ? "active" : ""}`}>
          <img
            src={showPasswordImage}
            alt="show Password"
            onClick={toggleShow}
          />
        </div>
      </div>
    </div>
  );
};
export default PasswordInput;
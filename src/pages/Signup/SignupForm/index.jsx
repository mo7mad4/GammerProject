import React, { useState } from "react";
import MyCheckBox from "../../../components/MyCheckBox";
import MyInput from "../../../components/MyInput";
import  PasswordInput  from "../../../components/PasswordInput";
import SubmitButton from "../../../components/SubmitButton";
import { Body1 } from "../../../components/Typography";
import PasswordStrengthBar from "../../../components/PasswordStrengthBar";
import "./style.css";
import { schema } from "../../../validation/signupValidation";
import Alerts from "../../../components/Alerts";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    selected: false,
    errors: [],
    success: false,
  });

  const validateData = () => {
    schema
      .validate(
        {
          email: formData.email,
          password: formData.password,
          password2: formData.password2,
          selected: formData.selected,
        },
        { abortEarly: false }
      )
      .then(() => {
        setFormData({ success: true });
      })
      .catch((err) => {
        setFormData({ errors: err.errors });
      });
  };

  const handelEmptyErrors = () => {
    setFormData({ errors: [] });
  };

  const handleRemoveSuccessFlag = () => {
    setFormData({ success: false });
  };

  
  const handleToggleCheckbox = () => {
      setFormData((prev) => ({ selected: !prev.selected }));
    };
    
    const handelOnChange = (e) => {
      setFormData({ [e.target.name]: e.target.value });
    };

  const onSubmit = (e) => {
    e.preventDefault();
    validateData();
  };

  return (
    <form onSubmit={onSubmit}>
      <MyInput
        name="email"
        label="Email address*"
        value={formData.email}
        onChange={handelOnChange}
        type="email"
        placeholder="Enter email address"
        required
      />

      <PasswordInput
        value={formData.password}
        onChange={handelOnChange}
        name="password"
        label="Create password*"
        required
        placeholder="Password"
      />
      <PasswordStrengthBar password={formData.password} />

      <PasswordInput
        value={formData.password2}
        onChange={handelOnChange}
        name="password2"
        label="Repeat password*"
        required
        placeholder="Repeat password"
      />
      <div className="terms-conditions">
        <MyCheckBox
          value={formData.selected}
          onChange={handleToggleCheckbox}
          name="selected"
        />
        <Body1 className="text-gray-2">I agree to terms & conditions</Body1>
      </div>
      <SubmitButton>Register Account</SubmitButton>

      {(formData.success || formData.errors.length > 0) && (
        <Alerts
          errors={formData.errors}
          emptyErrors={handelEmptyErrors}
          success={formData.success}
          removeSuccessFlag={handleRemoveSuccessFlag}
          successMsg="sign up done successfully 👏"
        />
      )}
    </form>
  );
};

export default SignupForm;

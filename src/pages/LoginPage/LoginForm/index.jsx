import React, { useState } from "react";
import MyInput from "../../../components/MyInput";
import SubmitButton from "../../../components/SubmitButton";
import PasswordInput from "../../../components/PasswordInput";
import { schema } from "../../../validation/loginValidation";
import Alerts from "../../../components/Alerts";

const LoginForm = () => {

  // const [formData,SetFormData] = useState({
  //     email:"",
  //     password:"",
  //     errors : [],
  //     success:false
  // })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const emptyErrors = () => {
    setErrors({ errors: [] });
  };

  const removeSuccessFlag = () => {
    setSuccess({ success: false });
  };

  const validateData = () => {
    schema
      .validate(
        {
          email: email,
          password: password,
        },
        { abortEarly: false }
      )
      .then(() => {
        setSuccess({ success: true });
      })
      .catch((err) => {
        setErrors({ errors: err.errors });
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateData();
  };

  return (
    <form onSubmit={onSubmit}>
      <MyInput
        name="email"
        label="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Write your email"
        required
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        label="Enter your password"
        required
      />
      <SubmitButton>login</SubmitButton>
      {(success || errors.length > 0) && (
        <Alerts
          errors={errors}
          emptyErrors={emptyErrors}
          success={success}
          removeSuccessFlag={removeSuccessFlag}
          successMsg="success log in 👏"
        />
      )}
    </form>
  );
};
export default LoginForm;

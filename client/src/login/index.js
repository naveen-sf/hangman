import React from "react";
import { Formik } from "formik";

import "./login.scss";

// component to show the input to get user email address
const Login = ({ setUserEmail }) => {

  const initialValues = {
    email: "",
  };

  // method to validate the email address
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    return errors;
  };

  // method call on submit form
  const submitForm = (values) => {
    setUserEmail(values.email)
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
          <div className="container">
            <h1>Sign in to Play Game</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label id="email" htmlFor="email">Email
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                </label>
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;

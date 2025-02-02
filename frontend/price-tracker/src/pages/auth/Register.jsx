import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const schema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Register = () => {
  const [conditions, setConditions] = useState(false);
  const navigateTo = useNavigate();

  const handleCheckboxChange = () => {
    setConditions(!conditions);
  };

  const initialValues = {
    name: "",
    lastName: "",
    password: "",
    email: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("lastName", values.lastName);
    formData.append("password", values.password);
    formData.append("email", values.email);

    try {
      const response = await authService.addUser(formData);

      if (response.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `User has been created!`,
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
        navigateTo("/");
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `There was an error when creating User!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5 mt-10 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <a href="#!">
                      <img
                        src="./assets/img/pstrack_logo.png"
                        alt="BootstrapBrain Logo"
                        width={175}
                        height={57}
                      />
                    </a>
                  </div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Enter your details to register
                  </h2>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      errors,
                      touched,
                    }) => (
                      <Form className="forms-sample" onSubmit={handleSubmit}>
                        <div className="row gy-2 overflow-hidden">
                          {/* First Name */}
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
                              />
                              <label htmlFor="name" className="form-label">
                                First Name
                              </label>
                            </div>
                          </div>

                          {/* Last Name */}
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger"
                              />
                              <label htmlFor="lastName" className="form-label">
                                Last Name
                              </label>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                            </div>
                          </div>

                          {/* Password */}
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                              />
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                            </div>
                          </div>

                          {/* Confirm Password */}
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                              />
                              <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="text-danger"
                              />
                              <label
                                htmlFor="confirmPassword"
                                className="form-label"
                              >
                                Confirm Password
                              </label>
                            </div>
                          </div>

                          {/* Terms and Conditions */}
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="iAgree"
                                id="iAgree"
                                checked={conditions}
                                onChange={handleCheckboxChange}
                                required
                              />
                              <ErrorMessage
                                name="conditions"
                                component="div"
                                className="text-danger"
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="iAgree"
                              >
                                I agree to the{" "}
                                <a className="link-primary text-decoration-none">
                                  terms and conditions
                                </a>
                              </label>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="col-12">
                            <div className="d-grid my-3">
                              <button
                                className="btn btn-primary btn-lg"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Sign up
                              </button>
                            </div>
                          </div>

                          {/* Link to Login */}
                          <div className="col-12">
                            <p className="m-0 text-secondary text-center">
                              Already have an account?{" "}
                              <Link
                                to="/"
                                className="link-primary text-decoration-none"
                              >
                                Sign in
                              </Link>
                            </p>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

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
      <section className="bg-light py-3 py-md-5 auth-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="card border rounded-3 shadow-sm auth-card">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <img
                      src="./assets/img/pstrack_logo.png"
                      className="responsive-logo"
                      alt="Logo"
                      width={175}
                      height={57}
                    />
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
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="row gy-3">
                          <div className="col-12">
                            <div className="form-floating">
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
                              <label htmlFor="name">First Name</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-floating">
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
                              <label htmlFor="lastName">Last Name</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                              <label htmlFor="email">Email</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-floating">
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
                              <label htmlFor="password">Password</label>
                            </div>
                          </div>

                          <div className="row">
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
                                <label
                                  className="form-check-label text-secondary"
                                  style={{ wordBreak: "break-word" }}
                                >
                                  I agree to the{" "}
                                  <a
                                    className="link-primary"
                                    href="#"
                                    style={{ textDecoration: "underline" }}
                                  >
                                    terms and conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              className="btn btn-primary btn-lg w-100"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Sign up
                            </button>
                          </div>

                          <div className="col-12 text-center">
                            <p className="text-secondary">
                              Already have an account?{" "}
                              <Link to="/" className="link-primary">
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

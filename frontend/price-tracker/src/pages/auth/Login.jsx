import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../features/useRedux";
import "./auth.css";

// Validation schema with Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter a valid Email"),
});

const Login = () => {
  const auth = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigateTo("/home");
    }
  }, [auth, navigateTo]);

  const initialValues = {
    email: "",
    password: "",
  };

  // Fonction de soumission du formulaire
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(loginStart());

    let data = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await authService.signin(data);
      console.log(response.data);
      if (response.status === 201) {
        dispatch(loginSuccess(response.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Connect Success!",
          showConfirmButton: false,
          timer: 1500,
        });

        resetForm();
        navigateTo("/home");
      }
    } catch (error) {
      dispatch(loginFailure());

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Connect Error!",
        text: "An error occurred during login. Please try again.",
        showConfirmButton: true,
        timer: 1500,
      });
      console.error("Error during Login:", error);
      navigateTo("/");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="py-3 py-md-5 mt-10 bg-light">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center mb-5">
                      <a href="#!">
                        <img
                          src="./assets/img/pstrack_logo.png"
                          alt="BootstrapBrain Logo"
                          className="img-fluid"
                          width={175}
                          height={57}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginSchema}
                  onSubmit={onSubmit}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    errors,
                    touched,
                  }) => (
                    <Form className="forms-sample pt-3">
                      <div className="row gy-3 gy-md-4 overflow-hidden">
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <div className="input-group position-relative">
                            {" "}
                            {/* position relative ici */}
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger position-absolute" // Ajoute position absolute pour l'erreur
                              style={{
                                top: "100%",
                                left: 0,
                                fontSize: "0.875rem",
                              }} // Positionne l'erreur sous l'input
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <div className="input-group position-relative">
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-key"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                              </svg>
                            </span>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-danger position-absolute"
                              style={{
                                top: "100%",
                                left: 0,
                                fontSize: "0.875rem",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-lg"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Log In
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                      <Link
                        to="/register"
                        style={{
                          color: "gray",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "blue")}
                        onMouseLeave={(e) => (e.target.style.color = "gray")}
                      >
                        Create new account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PageError = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user);
  console.log("User from Redux:", auth);

  const handleNavigation = () => {
    if (auth) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span class="display-1 fw-bold">4</span>
                  <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
                  <span class="display-1 fw-bold bsb-flip-h">4</span>
                </h2>
                <h3 class="h2 mb-2">Oops! You're lost.</h3>
                <p class="mb-5">The page you are looking for was not found.</p>
                <button
                  className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                  onClick={handleNavigation}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageError;

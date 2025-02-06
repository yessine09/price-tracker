import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";

import Stock from "../stocks/Stock";
import ScrapStock from "../stocks/ScrapStock";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main id="main">
        {/* Section - Dashboard */}
        <section className="py-3 py-md-4 py-xl-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1
                  className=" mb-4 fw-bold text-bold"
                  style={{ fontSize: "24px", letterSpacing: "1px" }}
                >
                  PriceTracker Dashboard
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 fs-7">
                    <li className="breadcrumb-item">
                      <a
                        className="link-primary text-decoration-none"
                        href="index.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Display Static Data */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Sales
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          $6,820
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-truck fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">-9%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Earnings
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          $21,900
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">+26%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Visitors
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          3,764
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-person fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">+69%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Orders
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          786
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">-21%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="">
                {/* Chart 1 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                      <div className="mb-3 mb-sm-0">
                        <h4
                          className=" mb-4 fw-bold text-bold"
                          style={{ fontSize: "24px", letterSpacing: "1px" }}
                        >
                          Stock News
                        </h4>
                        <img
                          src="./assets/img/finance.jpg"
                          alt="Stock News"
                          style={{
                            width: "100%", // Makes the image fit inside the parent container
                            maxWidth: "100%", // Prevents overflow
                            height: "auto", // Ensures aspect ratio is maintained
                            objectFit: "cover",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            transition: "transform 0.3s ease-in-out",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                      </div>
                    </div>
                    <div id="bsb-chart-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & historical Section */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <Stock />
        </section>

        {/* Scrap Section */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <ScrapStock />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;

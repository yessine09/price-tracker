import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main id="main">
        {/* Section - Bootstrap Brain Component */}
        {/* Breadcrumb */}
        <section className="py-3 py-md-4 py-xl-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="h4">eCommerce Dashboard</h1>
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
        {/* Section - Bootstrap Brain Component */}
        {/* Card 1 - Bootstrap Brain Component */}
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
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-lg-6 col-xl-7">
                {/* Chart 1 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title widget-card-title">
                          Sales Overview
                        </h5>
                      </div>
                      <div>
                        <select className="form-select text-secondary border-light-subtle">
                          <option value={1}>March 2023</option>
                          <option value={2}>April 2023</option>
                          <option value={3}>May 2023</option>
                          <option value={4}>June 2023</option>
                        </select>
                      </div>
                    </div>
                    <div id="bsb-chart-1" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-5">
                {/* Chart 4 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title widget-card-title">
                          Department Sales
                        </h5>
                      </div>
                      <div>
                        <select className="form-select text-secondary border-light-subtle">
                          <option value={1}>March 2023</option>
                          <option value={2}>April 2023</option>
                          <option value={3}>May 2023</option>
                          <option value={4}>June 2023</option>
                        </select>
                      </div>
                    </div>
                    <div id="bsb-chart-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-lg-6 col-xl-5">
                {/* Timeline 8 - Bootstrap Brain Component */}
                <div className="card widget-card bsb-timeline-8 border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title widget-card-title mb-3">
                      Recent Transactions
                    </h5>
                    <ul className="timeline">
                      <li className="timeline-item">
                        <div className="timeline-body">
                          <div className="timeline-meta">
                            <span>32 minutes</span>
                          </div>
                          <div className="timeline-content timeline-indicator">
                            <h6 className="mb-1">
                              Amount received in the PayPal gateway.
                            </h6>
                            <span className="text-secondary fs-7">
                              User: William Lucas
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <div className="timeline-body">
                          <div className="timeline-meta">
                            <span>49 minutes</span>
                          </div>
                          <div className="timeline-content timeline-indicator">
                            <h6 className="mb-1">
                              New sale recorded in the Bootstrap admin
                              templates.
                            </h6>
                            <span className="text-secondary fs-7">
                              Product: Console
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <div className="timeline-body">
                          <div className="timeline-meta">
                            <span>2 hours</span>
                          </div>
                          <div className="timeline-content timeline-indicator">
                            <h6 className="mb-1">
                              User registered in the discount campaign.
                            </h6>
                            <span className="text-secondary fs-7">
                              Country: United States
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                {/* Map 2 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                      <div className="mb-2 mb-sm-0">
                        <h5 className="card-title widget-card-title m-0">
                          Global Sales Overview
                        </h5>
                      </div>
                      <div>
                        <span className="text-secondary fs-7">
                          Last updated: 7 days ago
                        </span>
                      </div>
                    </div>
                    <div id="bsb-map-2" className="bsb-jvm-zoom-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-lg-6 col-xl-7">
                {/* Chart 3 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title widget-card-title mb-3">
                      Revenue Stats
                    </h5>
                    <div id="bsb-chart-3" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-5">
                {/* Card 2 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title widget-card-title mb-4">
                      Payment Overview
                    </h5>
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-paypal" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">PayPal</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Funds Received
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$5,432</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-stripe" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">Stripe</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Invoice Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$325</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-credit-card-fill" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">Credit Card</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Top Up
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$99</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-bank2" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">Bank</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Check Deposited
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$2,432</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-wallet-fill" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">Wallet</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Bill Payment
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$750</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                                  <i className="bi bi-arrow-up-left-circle-fill" />
                                </div>
                              </div>
                              <div>
                                <h6 className="m-0">Refund</h6>
                                <p className="text-secondary m-0 fs-7">
                                  Case Closed
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <h6 className="text-end">$289</h6>
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
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-lg-6 col-xl-5">
                {/* Calendar 1 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div
                      id="bsb-calendar-1"
                      className="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap5 bsb-calendar-theme"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                {/* Table 1 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title widget-card-title mb-4">
                      Monthly Transactions
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
                        <thead>
                          <tr>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6 className="mb-1">#HO3210</h6>
                              <span className="text-secondary fs-7">
                                Web, UI Design
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">Oliver</h6>
                              <span className="text-secondary fs-7">
                                United States
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">Bootstrap</h6>
                              <span className="text-secondary fs-7">v5.3+</span>
                            </td>
                            <td>$495</td>
                            <td>
                              <span className="badge rounded-pill bg-danger">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-1">#DR8672</h6>
                              <span className="text-secondary fs-7">
                                Web, UX Design
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">Emma</h6>
                              <span className="text-secondary fs-7">
                                United Kingdom
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">WordPress</h6>
                              <span className="text-secondary fs-7">v6.3+</span>
                            </td>
                            <td>$950</td>
                            <td>
                              <span className="badge rounded-pill bg-success">
                                Paid
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-1">#SA2910</h6>
                              <span className="text-secondary fs-7">
                                Web, SEO
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">Isabella</h6>
                              <span className="text-secondary fs-7">
                                Canada
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">React</h6>
                              <span className="text-secondary fs-7">v18+</span>
                            </td>
                            <td>$700</td>
                            <td>
                              <span className="badge rounded-pill bg-info">
                                On Hold
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 className="mb-1">#BD1019</h6>
                              <span className="text-secondary fs-7">
                                SEM, SEO
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-1">William</h6>
                              <span className="text-secondary fs-7">UAE</span>
                            </td>
                            <td>
                              <h6 className="mb-1">Vue</h6>
                              <span className="text-secondary fs-7">v3+</span>
                            </td>
                            <td>$875</td>
                            <td>
                              <span className="badge rounded-pill bg-warning">
                                Negotiating
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

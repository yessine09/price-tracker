import React from "react";

const SideBar = () => {
  return (
    <>
      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex={-1}
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
      >
        <div className="offcanvas-header">
          <a className="sidebar-brand" href="index.html">
            <img
              src="./assets/img/branding/console-logo.svg"
              id="bsbSidebarLabel1"
              className="bsb-tpl-logo"
              alt="BootstrapBrain Logo"
            />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body pt-0">
          <hr className="sidebar-divider mb-3" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link p-3 bg-light rounded active"
                data-bs-toggle="collapse"
                href="#dashboardExamples"
                role="button"
                aria-expanded="true"
                aria-controls="dashboardExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-grid" />
                </div>
                <span className="nav-link-text fw-bold">Dashboards</span>
              </a>
              <div className="collapse show" id="dashboardExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-primary active"
                      aria-current="page"
                      href="index.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">eCommerce</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-3">
              <h6 className="py-1 text-secondary text-uppercase fs-7">Tools</h6>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#componentExamples"
                role="button"
                aria-expanded="false"
                aria-controls="componentExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-menu-button-wide-fill" />
                </div>
                <span className="nav-link-text fw-bold">Components</span>
              </a>
              <div className="collapse" id="componentExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="components-accordion.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Accordion</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="components-alerts.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Alerts</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="components-buttons.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Buttons</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="components-card.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Card</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#formExamples"
                role="button"
                aria-expanded="false"
                aria-controls="formExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-ui-radios" />
                </div>
                <span className="nav-link-text fw-bold">Forms</span>
              </a>
              <div className="collapse" id="formExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="forms-layout.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Layouts</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="forms-validation.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Validation</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#iconExamples"
                role="button"
                aria-expanded="false"
                aria-controls="iconExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-flower2" />
                </div>
                <span className="nav-link-text fw-bold">Icons</span>
              </a>
              <div className="collapse" id="iconExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="bootstrap-icons.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Bootstrap</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#tableExamples"
                role="button"
                aria-expanded="false"
                aria-controls="tableExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-layout-text-window-reverse" />
                </div>
                <span className="nav-link-text fw-bold">Tables</span>
              </a>
              <div className="collapse" id="tableExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="tables-basic.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Basic</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="tables-accented.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Accented</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-3">
              <h6 className="py-1 text-secondary text-uppercase fs-7">
                Addons
              </h6>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#cardExamples"
                role="button"
                aria-expanded="false"
                aria-controls="cardExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-card-heading" />
                </div>
                <span className="nav-link-text fw-bold">Cards</span>
              </a>
              <div className="collapse" id="cardExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="cards-stats.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Stats</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="cards-tables.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Tables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="cards-timelines.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Timelines</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#calendarExamples"
                role="button"
                aria-expanded="false"
                aria-controls="calendarExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-calendar-event" />
                </div>
                <span className="nav-link-text fw-bold">Calendars</span>
              </a>
              <div className="collapse" id="calendarExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="calendars-basic.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Basic</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#chartExamples"
                role="button"
                aria-expanded="false"
                aria-controls="chartExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-bar-chart" />
                </div>
                <span className="nav-link-text fw-bold">Charts</span>
              </a>
              <div className="collapse" id="chartExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="apex-charts.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Apex</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#mapExamples"
                role="button"
                aria-expanded="false"
                aria-controls="mapExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-map" />
                </div>
                <span className="nav-link-text fw-bold">Maps</span>
              </a>
              <div className="collapse" id="mapExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="jsvectormap-maps.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Vector Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-3">
              <h6 className="py-1 text-secondary text-uppercase fs-7">
                Extras
              </h6>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#pageExamples"
                role="button"
                aria-expanded="false"
                aria-controls="pageExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-folder" />
                </div>
                <span className="nav-link-text fw-bold">Pages</span>
              </a>
              <div className="collapse" id="pageExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-profile.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-invoice.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Invoice</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-pricing.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Pricing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-contact.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Contact</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-faqs.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">FAQs</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-blank.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Blank</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="pages-error-404.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Error 404</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#authExamples"
                role="button"
                aria-expanded="false"
                aria-controls="authExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="bi bi-gear" />
                </div>
                <span className="nav-link-text fw-bold">Authentication</span>
              </a>
              <div className="collapse" id="authExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="auth-login.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Log In</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="auth-register.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Register</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="auth-reset-password.html"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Reset Password</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <hr className="sidebar-divider my-4" />
          <div className="bg-light rounded-3 position-relative px-4 pt-5 pb-4 mt-7">
            <div className="bsb-w-80 bsb-h-80 d-flex align-items-center justify-content-center text-bg-primary border border-5 border-white rounded-circle position-absolute top-0 start-50 translate-middle">
              <i className="bi bi-rocket-takeoff lh-1 fs-3" />
            </div>
            <div className="text-center">
              <h3 className="h5">Admin Dashboard Templates</h3>
              <p className="fs-7">
                Browse our Admin Dashboard Templates to unlock possibilities and
                enjoy exclusive features that will transform your projects to
                the next level.
              </p>
              <div className="d-grid m-0">
                <a
                  className="btn btn-primary rounded-pill"
                  href="https://bootstrapbrain.com/template-category/admin-dashboard/"
                  target="_blank"
                  role="button"
                >
                  Browse
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

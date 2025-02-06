import React from "react";
import { Link } from "react-router-dom";
import logopic from "/assets/img/pstrack_logo.png";
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
              src={logopic}
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
                    <Link
                      className="nav-link link-primary active"
                      aria-current="page"
                      to={"/home"}
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">Home</span>
                    </Link>
                  </li>
                </ul>
              </div>
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
                <span className="nav-link-text fw-bold">WatchList</span>
              </a>
              <div className="collapse" id="componentExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to={"/watchlist"}
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="bi bi-arrow-right-short" />
                      </div>
                      <span className="nav-link-text">WatchList</span>
                    </Link>
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
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-3 border-top border-light-subtle">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="py-3">
                Built by{" "}
                <a className="link-secondary text-decoration-none">
                  Yessine Akaichi
                </a>{" "}
                with <span className="text-accent">♥</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

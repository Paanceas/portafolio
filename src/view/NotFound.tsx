import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks";
import { Footer } from "../page";
import React from "react";

export const NotFound = () => {
  useDocumentTitle("Not Found");
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">
                  404 - Página no encontrada..
                </h1>
                <p className="h4">
                     Woops, parece que la página que solicitaste no fue encontrada.
                </p>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" to="/">
                    VOLVER A INICIO
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};
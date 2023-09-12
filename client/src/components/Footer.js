import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">QUICK LINKS</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Industry Collaborations</a></li>
                    <li><a href="#!">Events</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">USEFUL LINKS</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">PO, PEO & PSO</a></li>
                    <li><a href="#!">Laboratories</a></li>
                    <li><a href="#!">Professional Bodies</a></li>
                    <li><a href="#!">Student Organization</a></li>
                    <li><a href="#!">Result Analysis</a></li>
                    <li><a href="#!">Placement Details</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

  );
}

export default Footer;

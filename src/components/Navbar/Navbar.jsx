import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <Link to="/" className="logo m-0 float-start">
                FBX
              </Link>

              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                <li className="active">
                  <Link to="/">HOME</Link>
                </li>
                <li className="">
                  <Link to="/">SERVICES</Link>
                </li>
                <li className="">
                  <Link to="/">PRODUCTS</Link>
                </li>
                <li className="has-children">
                  <Link to="/">Explore</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Services-We-offer</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="sell.html">Become a seller</a>
                </li>
              </ul>

              <a
                href="/"
                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

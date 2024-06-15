import React from "react";
import { Link } from "gatsby";
// import logo from "../img/logo.svg";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <hr />
        <div className="content has-text-centered">
          <h1 className="is-size-3">IEEE ComSoc Tokyo Joint Chapter</h1>
        </div>
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/officers/">
                        Officers
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog/">
                        Events
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ieee-jp.org/section/tokyo/chapter/COM-19/com-19.html" target="_blank" rel="noopener noreferrer">
                        Past events (to the previous site)
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://ieee-jp.org/" target="_blank" rel="noopener noreferrer" title="IEEE Japan Council">
                        IEEE Japan Council
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a className="navbar-item" href="https://yamazato.nuee.nagoya-u.ac.jp/en/" target="_blank" rel="noopener noreferrer" title="Nagoya University Yamazato Laboratory">
                  <FaWifi />
                  &nbsp;&nbsp;Yamazato Laboratory
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

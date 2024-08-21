import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="">
            {props.name}
          </a> */}
          <Link className="navbar-brand" to="/">
            {props.name}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="">
                  {props.home}  
                </a> */}
                <Link className="nav-link " aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                style={{ height: "25px", width: "25px", cursor: "pointer" }}
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.showMode(["primary"]);
                }}
              ></div>

              <div
                style={{ height: "25px", width: "25px", cursor: "pointer" }}
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.showMode(["danger"]);
                }}
              ></div>
              <div
                style={{ height: "25px", width: "25px", cursor: "pointer" }}
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.showMode(["success"]);
                }}
              ></div>
              <div
                style={{ height: "25px", width: "25px", cursor: "pointer" }}
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.showMode(["warning"]);
                }}
              ></div>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  props.showMode(null);
                }}
              />
              <label
                className={`form-check-label text-${
                  props.mode == "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                change mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import "./ScrollExample.css";

import { Link } from "react-scroll";

const ScrollExample = (props) => {
  return (
    <div
      id={props.name}
      className="ScrollExample d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: props.color }}
    >
      <h1 className="display-1">{props.name}</h1>
      <div className="d-flex flex-row">
        {props.up !== props.down ? (
          <>
            <Link
              activeClass="active"
              className="test1 nav-link"
              to={props.up}
              spy={true}
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer" }}
            >
              <button type="button" className="btn btn-outline-light">
                To {props.up}
              </button>
            </Link>
            <Link
              activeClass="active"
              className="nav-link"
              to={props.down}
              spy={true}
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer" }}
            >
              <button type="button" className="btn btn-outline-light">
                To {props.down}
              </button>
            </Link>
          </>
        ) : (
          <Link
            activeClass="active"
            className="nav-link"
            to={props.down}
            spy={true}
            smooth={true}
            duration={1000}
            style={{ cursor: "pointer" }}
          >
            <button type="button" className="btn btn-outline-light">
              To {props.up}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ScrollExample;

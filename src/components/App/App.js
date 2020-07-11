import React from "react";
import "./App.css";

import { Link } from "react-scroll";

import ScrollExample from "../ScrollExample/ScrollExample";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link
          activeClass="active"
          className="test1 nav-link"
          to="test1"
          spy={true}
          smooth={true}
          duration={4000}
          style={{ cursor: "pointer" }}
        >
          React Scroll Example
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1 nav-link"
                to="test1"
                spy={true}
                smooth={true}
                duration={2000}
                style={{ cursor: "pointer" }}
              >
                Test 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test2 nav-link"
                to="test2"
                spy={true}
                smooth={true}
                duration={2000}
                style={{ cursor: "pointer" }}
              >
                Test 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test3 nav-link"
                to="test3"
                spy={true}
                smooth={true}
                duration={2000}
                style={{ cursor: "pointer" }}
              >
                Test 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test4 nav-link"
                to="test4"
                spy={true}
                smooth={true}
                duration={2000}
                style={{ cursor: "pointer" }}
              >
                Test 4
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="test5 nav-link"
                to="test5"
                spy={true}
                smooth={true}
                duration={2000}
                delay={500}
                style={{ cursor: "pointer" }}
              >
                Test 5(delay 1000s)
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ScrollExample
        name={"test1"}
        color={"grey"}
        up={"test2"}
        down={"test2"}
      />
      <ScrollExample
        name={"test2"}
        color={"purple"}
        up={"test1"}
        down={"test3"}
      />
      <ScrollExample
        name={"test3"}
        color={"orange"}
        up={"test2"}
        down={"test4"}
      />
      <ScrollExample
        name={"test4"}
        color={"blue"}
        up={"test3"}
        down={"test5"}
      />
      <ScrollExample name={"test5"} color={"red"} up={"test1"} down={"test1"} />
    </div>
  );
}

export default App;

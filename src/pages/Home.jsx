/*import React, { useEffect, useState } from "react";
import MyImage from "../assets/user.png";

import { useNavigate } from "react-router-dom";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "https://www.bpsindia.in/assets/img/hk/2.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function Home() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-submenu");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        const submenu = dropdown.querySelector(".dropdown-menu");
        submenu.classList.add("show");
        submenu.setAttribute("aria-expanded", "true");
      });
      dropdown.addEventListener("mouseleave", () => {
        const submenu = dropdown.querySelector(".dropdown-menu");
        submenu.classList.remove("show");
        submenu.setAttribute("aria-expanded", "false");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", () => {});
        dropdown.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Homify
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactus">
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-disabled="true" href="/aboutus">
                  About us
                </a>
              </li>
            </ul>

            {/*        <div class="dropstart">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={MyImage}
                  style={{ width: "30px", backgroundColor: "white" }}
                  alt=""
                />
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Admin
                    <div class="btn-group dropstart">
                      <a
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >

                      </a>
                      <ul class="dropdown-menu"></ul>
                      <li>
                        <a class="dropdown-item" href="#">
                            Login
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                            Sign Up
                        </a>
                      </li>

                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "white",
                  }}
                  src={MyImage}
                  alt="User Icon"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    id="submenuDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service Provider
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="submenuDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/login?role=sp">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    id="submenuDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Customer
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="submenuDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/login?role=customer">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item" href="/adminlogin">
                    Admin
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
        // style={{ maxWidth: "1050px", margin: "100px auto" }}
        style={{ maxWidth: "100vw", margin: "0 auto", height: "100vh", overflow: "hidden"  }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={MyCollection.at(0).imgPath}
              class="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={MyCollection.at(1).imgPath}
              class="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={MyCollection.at(2).imgPath}
              class="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ color: "black" }}
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{ color: "black" }}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
*/


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyImage from "../assets/user.png";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "https://www.bpsindia.in/assets/img/hk/2.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function Home() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-submenu");

    const handleMouseEnter = (event) => {
      const submenu = event.currentTarget.querySelector(".dropdown-menu");
      submenu.classList.add("show");
      submenu.setAttribute("aria-expanded", "true");
    };

    const handleMouseLeave = (event) => {
      const submenu = event.currentTarget.querySelector(".dropdown-menu");
      submenu.classList.remove("show");
      submenu.setAttribute("aria-expanded", "false");
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Homify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About us
                </a>
              </li>
            </ul>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "white",
                  }}
                  src={MyImage}
                  alt="User Icon"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#" role="button">
                    Service Provider
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/login?role=sp">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#" role="button">
                    Customer
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/login?role=customer">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item" href="/adminlogin">
                    Admin
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-0" style={{overflow: "hidden"}}>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "100vw", height: "100vh", position: "relative" }}
        >
          <div className="carousel-inner" style={{ width: "100%", height: "100%" }}>
            {MyCollection.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={item.imgPath}
                  className="d-block w-100"
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
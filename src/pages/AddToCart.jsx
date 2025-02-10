/*import shoppingCart from "../assets/shopping-cart.png";

function AddToCart() {
  const col = {
    float: "left",
    width: "32%",
    margin: "10px",
  };
  return (
    <div>
      <nav class="navbar bg-body-tertiary" style={{ marginBottom: "50px" }}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.wackybuttons.com/designcodes/0/110/1102098.png"
              alt="Homify"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>

      <div class="row" style={{ boxSizing: "border-box", margin: "10px" }}>
        <div class="column" style={col}>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-header">Featured</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>

        <div class="column" style={col}>
          <a href="/cart" style={{ display: "inline", textDecoration: "none" }}>
            <div
              class="card mb-3"
              style={{ maxWidth: "500px", textAlign: "center" }}
            >
              <div class="row g-0">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column" style={col}>
          <div
            class="card mb-3"
            style={{ maxWidth: "500px", textAlign: "center" }}
          >
            <div class="row g-0">
              <div class="card-body">
                <img
                  src={shoppingCart}
                  alt="shopping"
                  style={{ width: "50px", height: "50px" }}
                />

                <p style={{ fontWeight: "bold" }}>No Items in your cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
*/

import React, { useState } from "react";
import shoppingCart from "../assets/shopping-cart.png";

function AddToCart() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const col = {
    float: "left",
    width: "32%",
    margin: "10px",
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary" style={{ marginBottom: "50px" }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.wackybuttons.com/designcodes/0/110/1102098.png"
              alt="Homify"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>

      <div className="row" style={{ boxSizing: "border-box", margin: "10px" }}>
        <div className="column" style={col}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
        </div>

        <div className="column" style={col}>
          <div
            className="card text-center p-4 shadow"
            style={{ width: "18rem", cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#dateModal"
          >
            <h5 className="card-title">Select a Date & Slot</h5>
            <p>Selected Service</p>
            <p className="card-text">
              {selectedDate && selectedSlot
                ? `Selected: ${selectedDate} , Slot: ${selectedSlot}`
                : "Click to choose a date and slot"}
            </p>
          </div>

          <div
            className="modal fade"
            id="dateModal"
            tabIndex="-1"
            aria-labelledby="dateModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="dateModalLabel">
                    Schedule a date and slot
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="dateSelect" className="form-label">
                    Select a Date:
                  </label>
                  <select
                    className="form-select"
                    id="dateSelect"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    value={selectedDate}
                  >
                    <option value="">-- Select a Date --</option>
                    <option value="2025-02-10">Feb 10, 2025</option>
                    <option value="2025-02-11">Feb 11, 2025</option>
                    <option value="2025-02-12">Feb 12, 2025</option>
                    <option value="2025-02-13">Feb 13, 2025</option>
                  </select>

                  <label
                    htmlFor="slotSelect"
                    className="form-label"
                    style={{ marginTop: "15px" }}
                  >
                    Select a Slot:
                  </label>
                  <select
                    className="form-select"
                    id="slotSelect"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    value={selectedSlot}
                  >
                    <option value="">-- Select a Slot --</option>
                    <option value="1">Slot 1</option>
                    <option value="2">Slot 2</option>
                    <option value="3">Slot 3</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column" style={col}>
          <div
            className="card mb-3"
            style={{ maxWidth: "500px", textAlign: "center" }}
          >
            <div className="row g-0">
              <div className="card-body">
                <a
                  href="/cart"
                  style={{ display: "inline", textDecoration: "none" }}
                >
                  <img
                    src={shoppingCart}
                    alt="shopping"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
                <p style={{ fontWeight: "bold" }}>No Items in your cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;

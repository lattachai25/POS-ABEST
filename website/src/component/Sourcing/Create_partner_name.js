import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Create_partner_name extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <div className="container">
          <div
            class="alert alert-primary"
            role="alert"
            style={{ marginTop: 50 }}
          >
            หน้าบริหารจัดการ Supplier
          </div>
          <div className="col-12">
            <br />
            <br />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  ID Supplier
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID Supplier"
                  value="T000001"
                />
              </div>
              <div className="col-6">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Zoon Supplier
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zoon Supplier"
                /> */}
              </div>
              <div className="col-12">
                <br />
              </div>

              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name Supplier
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Supplier"
                />
              </div>

              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Surname Supplier
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Surname Supplier"
                />
              </div>
              <div className="col-12">
                <br />
              </div>
              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Supplier"
                />
              </div>
              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Contact person name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact person name"
                />
              </div>
              <div className="col-12">
                <br />
                <br />
              </div>
              <div className="col-12">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Address Supplier
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <br />
            <br />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ float: "left" }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

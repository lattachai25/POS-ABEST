import React, { Component } from "react";
import PropTypes from "prop-types";
import { FcRight } from "react-icons/fc";

export default class Create_barcode extends Component {
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
            หน้าบริหารจัดการ BarCode
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
                  PLU Code 1
                </label>
                <input type="text" className="form-control" value="4098" />
              </div>
              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  PLU Code 2
                </label>
                <input type="text" className="form-control" value="4099" />
              </div>
              <div className="col-12">
                <br />
              </div>

              <div className="col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  1 internal barcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="internal barcode"
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
                  2 internal barcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="internal barcode"
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
                  3 internal barcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="internal barcode"
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
                  4 internal barcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="internal barcode"
                />
              </div>
              <div className="col-12">
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-12">
            <br />
            <br />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ float: "right" }}
                >
                  เพิ่ม
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </div>
              <div className="col-4">
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

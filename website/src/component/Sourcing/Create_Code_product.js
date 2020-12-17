import React, { Component } from "react";

export default class Create_Code_product extends Component {
  render() {
    return (
      <>
        <div className="col-12">
          <div className="row">
            <div className="col-2"> </div>
            <div className="col-8">
              <center>
                <div class="alert alert-primary" role="alert">
                  <h4 class="alert-heading"> Bardode </h4>
                </div>
              </center>
            </div>
            <div className="col-2"> </div>
          </div>

          <div className="row">
            <div className="col-8"> </div>
            <div
              className="col-2"
              //   style={{ border: "1px solid black"}}
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Barcodes"
                  aria-label="Barcodes"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-12">
              <br />
            </div>
            <div className="col-2"> </div>
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Code PLU</th>
                    <th>Internal Barcode</th>
                    <th>Internal Barcode</th>
                    <th>Internal Barcode</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <button type="button" class="btn btn-outline-primary">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-outline-danger">
                        Del
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-2"> </div>
          </div>
        </div>
      </>
    );
  }
}

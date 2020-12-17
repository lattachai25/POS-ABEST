import React, { Component } from "react";

export default class Edit_proct extends Component {
  render() {
    return (
      <>
        <div className="col-12">
          <div className="row">
            <div className="col-1"> </div>
            <div className="col-10">
              <center>
                <div class="alert alert-primary" role="alert">
                  <h4 class="alert-heading"> Bardode </h4>
                </div>
              </center>
            </div>
            <div className="col-1"> </div>
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
            <div className="col-1"> </div>
            <div className="col-10">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Code PLU</th>
                    <th>Code</th>
                    <th>Product Details</th>
                    <th>Qty</th>
                    <th>Cost</th>
                    {/* <th>ราคาขาย</th>
                    <th>ยอดรวม</th> */}
                    <th>Partner Code</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/*  -------------------------------------------------   */}

                  <tr>
                    <td width={50}>
                      <input type="text" className="form-control" value="01" />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="05088"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="0111128"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="ผักกาดหอม"
                      />
                    </td>
                    <td width={20}>
                      <input
                        type="text"
                        className="form-control"
                        value="20 /g"
                      />
                    </td>
                    <td width={20}>
                      <input type="text" className="form-control" value="100" />
                    </td>
                    {/* <td>
                      <input type="text" className="form-control" value="15" />
                    </td>
                    <td>
                      <input type="text" className="form-control" value="7" />
                    </td> */}
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="Wisdom office Co;Ltd"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="17/12/20"
                      />
                    </td>
                  </tr>
                  {/*  -------------------------------------------------   */}
                  {/*  -------------------------------------------------   */}

                  <tr>
                    <td width={50}>
                      <input type="text" className="form-control" value="02" />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="05057"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="02020010234"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="ผักกาดขาว"
                      />
                    </td>
                    <td width={20}>
                      <input
                        type="text"
                        className="form-control"
                        value="100 /g"
                      />
                    </td>
                    <td width={20}>
                      <input
                        type="text"
                        className="form-control"
                        value="1,000"
                      />
                    </td>
                    {/* <td>
                      <input type="text" className="form-control" value="15" />
                    </td>
                    <td>
                      <input type="text" className="form-control" value="7" />
                    </td> */}
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="บริษัท เอ็มไทยควอลิตี้ จำกัด"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="17/12/20"
                      />
                    </td>
                  </tr>
                  {/*  -------------------------------------------------   */}

                  {/*  -------------------------------------------------   */}

                  <tr>
                    <td width={50}>
                      <input type="text" className="form-control" value="02" />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="02054"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="0502221357"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="องุ่นแดงนอกไร้เมล็ด"
                      />
                    </td>
                    <td width={20}>
                      <input
                        type="text"
                        className="form-control"
                        value="70 /g"
                      />
                    </td>
                    <td width={20}>
                      <input
                        type="text"
                        className="form-control"
                        value="5,000"
                      />
                    </td>
                    {/* <td>
                      <input type="text" className="form-control" value="15" />
                    </td>
                    <td>
                      <input type="text" className="form-control" value="7" />
                    </td> */}
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="บริษัท เอสพี ฟูดส์ โพรดัก จำกัด"
                      />
                    </td>
                    <td width={100}>
                      <input
                        type="text"
                        className="form-control"
                        value="17/12/20"
                      />
                    </td>
                  </tr>
                  {/*  -------------------------------------------------   */}
                </tbody>
              </table>
            </div>
            <div className="col-1"> </div>
          </div>
        </div>
      </>
    );
  }
}

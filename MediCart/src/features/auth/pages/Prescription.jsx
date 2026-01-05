import React, { useEffect, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";

const Prescription = () => {

  const [prescription, setPrescription] = useState()

  useEffect(() => {
    const limit = 1024 * 1024 * 5 // 5 mb limit
    if (prescription?.size > limit) {
      alert("File size greater than 5mb not allowed")
      setPrescription()
    }

    const fetchdata = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

      // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      // const data = await response.json()
      // console.log(data);
    }

    fetchdata()

  }, [prescription])

  
  // setTimeout(() => {
  //   console.log("bom phut gya");
  // }, 3000);

  // setInterval(() => {
  //   console.log("Calling each 2 sec");
  // }, 2000);

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
    try {

    } catch (error) {

    } finally {
      setPrescription()
    }
  }

  return (
    <div className="bg-body-tertiary h-100 w-100 rounded-3 border shadow-sm p-2">
      <div className="border-bottom w-100 pb-1 mb-2">
        <span className="fs-5 fw-bold text-secondary"> Upload Prescription </span>
      </div>

      <div>
        <form onSubmit={handlePrescriptionSubmit}>
          <div className="py-5 d-flex items-center content-center flex-col gap-3">
            <input type="file" name="upload-perscription" id="upload" hidden accept=".pdf, .jpg, .jpeg" onChange={(e) => setPrescription(e.target.files[0])} />
            <div className="flex gap-2 flex-col">
              <button type="button" className="btn btn-success text-white">
                <label htmlFor="upload" className="d-flex gap-1 align-items-center cursor-pointer">
                  Select Prescription &nbsp;
                  <MdOutlineUploadFile className="fs-5" />
                </label>
              </button>
              {!!prescription && (
                <React.Fragment>
                  <span>
                    <strong>File:</strong> {prescription?.name}
                  </span>
                </React.Fragment>
              )}
            </div>
            <div className="mt-3">
              {!!prescription && (
                <button type="submit" className="btn btn-success">
                  Upload Prescription
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className="my-5"></div>

      <div className="border-bottom w-100 pb-1 mb-2">
        <span className="fs-5 fw-bold text-secondary"> Prescription History </span>
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Upload Date</th>
              <th scope="col">Prescription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>15-12-2025</td>
              <td>View Prescription</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>16-12-2025</td>
              <td>View Prescription</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescription;
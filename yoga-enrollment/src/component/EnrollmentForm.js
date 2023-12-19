import React, { useEffect, useState } from "react";
import { getAPIcalls, postAPIcalls } from "../utils/fetcher";
import "./EnrollmentForm.css";
function EnrollmentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [ageError, setAgeError] = useState(false); // New state to track age error
  const [showPreview, setshowPreview] = useState([]);

  useEffect(() => {
    console.log("effect-> ", showPreview);
  }, [showPreview]);

  const validateAge = () => {
    // Convert age to a number and check if it's within the range
    const ageValue = parseInt(age, 10);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 65) {
      setAgeError(true);
      return false;
    } else {
      setAgeError(false);
      return true;
    }
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const allDataFetcher = async () => {
    const mid = "user/get-all-data";
    const email = "";
    const response = await getAPIcalls(mid, email);
    if (response.status === 200) {
      // console.log("ritik-> ", response.data);
      // console.log("ritik-> ", response.data);
      const data = response.data ;
      const revData = data.reverse().slice(0,5) ; ;
      // const firstFiveEl = revData.slice(0,5) ;
      setshowPreview(revData) ;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateAge()) {
      alert("Please enter a valid age between 18 and 65.");
      return;
    }
    const credentials = {
      name,
      age,
      batch,
    };
    const mid = "user/create";
    const email = "";
    try {
      const response = await postAPIcalls(mid, email, credentials);
      if (response.status === 200) {
        // console.log("ritik-> ", response.data);
        setName("");
        setAge("");
        setBatch("");
        allDataFetcher();
      }
    } catch (error) {
      console.log("we got ans error");
    }

    // Perform submission logic
  };

  return (
    <>
      <div className="page-background">
        <div className="form-container">
          <h1 className="form-title">Please Enter Your Data</h1>
          <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={age}
                onChange={handleAgeChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="batch" className="form-label">
                Batch Selection
              </label>
              <select
                className="form-select"
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                required
              >
                <option value="">Select a batch</option>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
        </div>

        <div className="form-container">
          <h2 className="form-title">Latest data</h2>
        </div>

        <div className="form-container">
          {showPreview.length !== 0 ? (
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Batch</th>
              </tr>
            </thead>
            <tbody>
            {showPreview.slice(0,5).reverse().map((item, index) => (
              
              <tr >
              <th scope="row" key={item.id}>{index}</th>
              <td key={item.name}>{item.name}</td>
              <td key={item.name}>{item.age}</td>
              <td key={item.name}>{item.batch}</td>
            </tr>
            ))}
            </tbody>
          </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default EnrollmentForm;

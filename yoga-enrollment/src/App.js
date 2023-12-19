import React from "react";
import EnrollmentForm from "./component/EnrollmentForm";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./assets/image1.png";
function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <EnrollmentForm />
        </div>
      </div>
    </>
  );
}

export default App;

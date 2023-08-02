import React from "react";

function Home() {
  return (
    <div className="card-container ">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://img.freepik.com/premium-photo/young-woman-selling-clothes-accessories-online-by-smartphone-live-streaming-business-online-e-commerce-home_35076-4844.jpg"
          className="card-img"
          alt="background"
          height={630}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
          <div className="container">
            <h5 className="card-title display-3 text-primary fw-bolder mb-0">
              NEW SESSION ARRIVALS
            </h5>

            <p className="card-text text-warning">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

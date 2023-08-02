import React from "react";

function Home() {
  return (
    <div className="card-container ">
      <div class="card bg-dark text-white border-0">
        <img
          src="https://img.freepik.com/premium-photo/young-woman-selling-clothes-accessories-online-by-smartphone-live-streaming-business-online-e-commerce-home_35076-4844.jpg"
          class="card-img"
          alt="background"
          height={630}
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
          <div className="container">
            <h5 class="card-title display-3 text-primary fw-bolder mb-0">
              NEW SESSION ARRIVALS
            </h5>

            <p class="card-text text-warning">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

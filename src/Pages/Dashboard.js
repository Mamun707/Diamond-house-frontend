import React from "react";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import "../Pages/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard dashboard-style">
      <div className="card-div">
        <div className="c-title">
          <p>Customer Detail</p>
        </div>
        <div className="dash-cards">
          <Cards />
        </div>
      </div>
      <div className="All-Customer">
        <div className="a-title">
          <p>All Customers</p>
          <hr className="hr" />
        </div>
        <Filter />
      </div>
    </div>
  );
}

export default Dashboard;

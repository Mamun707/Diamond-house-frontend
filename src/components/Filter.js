import React, { useState, useEffect } from "react";
import Table from "./Table";
import Users from "./users.json";
import { Link } from "react-router-dom";

import "../components/Filter.css";
import AddCustomerButton from "./AddCustomerButton";

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = Users.filter((user) =>
      user.Name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <div>
        <div className="search-box">
          <div className="first-part">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="filter-box">
              <div class="dropdown">
                <div className="dropdwon-title">
                  <p>Filter Membership</p>
                </div>
                <button class="dropbtn">Membership</button>
                <div class="dropdown-content">
                  <Link to="#">Gold</Link>
                  <Link to="#">Silver</Link>
                  <Link to="#">Diamond</Link>
                </div>
              </div>
              <div className="filter-button">
                <button>Filter</button>
              </div>
            </div>
          </div>
          <div className="Second-part">
            <div className="export-button">
              <button>Export</button>
            </div>
            <div>
              <AddCustomerButton />
            </div>
          </div>
        </div>

        <Table searchResults={searchResults} />
      </div>
    </>
  );
}

export default Filter;

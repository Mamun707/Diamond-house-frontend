import React from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import "../Pages/Transaction.css";
function Transaction() {
  return (
    <div className="transaction">
      <div className="transaction-style">
        <Filter />
      </div>
    </div>
  );
}

export default Transaction;

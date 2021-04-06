import React, { useState } from "react";
import AddCustomer from "./AddCustomer";
import "../components/AddCustomerButton.css";

function AddCustomerButton() {
  const [showCustomer, setShowCustomer] = useState(false);
  const openCustomer = () => {
    setShowCustomer((prev) => !prev);
  };
  return (
    <>
      <div className="addcustomerbutton">
        <button onClick={openCustomer}>+ Add Customer</button>
      </div>

      <AddCustomer
        showCustomer={showCustomer}
        setShowCustomer={setShowCustomer}
      />
    </>
  );
}

export default AddCustomerButton;

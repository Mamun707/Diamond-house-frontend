import React, { useState } from "react";
import "../Pages/newcustomer.css";
import { BsPersonFill } from "react-icons/bs";

function NewCustomer() {
  const [name, setName] = useState();
  const [birth, setBirth] = useState();
  const [anniversary, setAnniversary] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const handleSubmit = () => {
    alert("added a customer");
  };
  return (
    <>
      <div className="newcustomers">
        <div className="title">
          <p>Add New Customer</p>
        </div>
        <form className="form">
          <div className="name">
            <div className="form-title">
              <label>Name</label>
            </div>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="birth">
            <div className="form-title">
              <label>Date Of Birth</label>
            </div>
            <input
              type="date"
              value={birth}
              onChange={(e) => {
                setBirth(e.target.value);
              }}
              placeholder="12/02/2010"
              required
            />
          </div>
          <div className="anniversary">
            <div className="form-title">
              <label>Anniversary Date</label>
            </div>
            <input
              type="date"
              value={anniversary}
              onChange={(e) => {
                setAnniversary(e.target.value);
              }}
              placeholder="12/02/2010"
              required
            />
          </div>
          <div className="mobile">
            <div className="form-title">
              <label>Mobile Number</label>
            </div>
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              placeholder="01xxxxxxxxx"
              required
            />
          </div>
          <div className="address">
            <div className="form-title">
              <label>Address</label>
            </div>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="300/2, East Nalhalpara,Tejgaon,Dhaka-1215"
              required
            />
          </div>
          <div className="submit">
            <input type="submit" value="Save" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCustomer;

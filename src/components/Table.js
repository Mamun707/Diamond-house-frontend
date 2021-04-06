import React from "react";
// import "../css/customerTable.css";
import Users from "./users.json";
import { MdMoreVert } from "react-icons/md";
import "../components/Table.css";

function Table({ searchResults }) {
  const handleAction = () => {
    alert("Handle Action");
  };
  const renderHeader = () => {
    let headerElement = [
      "Name",
      "Date Of Birth",
      "Anniversary",
      "Mobile No",
      "MemberShip",
      "Last Shopping",
      "Action",
    ];

    return headerElement.map((key, index) => {
      return (
        <div key={index}>
          <div className="data-header">{key}</div>
        </div>
      );
    });
  };

  const renderBody = () => {
    return (
      Users &&
      searchResults.map(
        ({
          Id,
          Name,
          Date_Of_Birth,
          Anniversary,
          Mobile_No,
          Membership,
          Last_Shopping,
        }) => {
          return (
            <div key={Id} className="data">
              <div className="data-title">{Name}</div>
              <div className="data-title">{Date_Of_Birth}</div>
              <div className="data-title">{Anniversary}</div>
              <div className="data-title">{Mobile_No}</div>
              <div className="data-title">
                <button>{Membership}</button>
                {/* <p className="button">{Membership}</p> */}
              </div>
              <div className="data-title">{Last_Shopping}</div>
              <div className="action data-title" onClick={handleAction}>
                <MdMoreVert />
              </div>
            </div>
          );
        }
      )
    );
  };

  return (
    <>
      <div className="user">
        <div className="header">{renderHeader()}</div>
        <div>{renderBody()}</div>
      </div>
    </>
  );
}

export default Table;

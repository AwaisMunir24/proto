import React, { Component } from "react";

import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="logo_name">QR Attendance System</h2>
            </div>
            <div className="col-lg-9 text-end">
                <h2>Attendance Page</h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

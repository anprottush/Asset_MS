import React from "react";
import './header.component.css';
const Header = () => {
  return (
    <header
      className="container-fluid py-3"
      style={{ backgroundColor: "red" }}
    >
      <div className="row">
        <div className="col-md-6 text-left py-2">
          <div className="p-1">
            <div class="p-1 text-black ">Dashboard</div>
            <div class="p-1 text-black">Welcome, Mehedi!</div>
          </div>
        </div>

        <div className="col-md-6 text-end py-1 ">
          <div className="p-3 ">
            <button type="button" className="btn btn-light me-2">
              <i className="bi bi-search"></i>
            </button>
            

            <button type="button" className="btn text-center py-2 w-50 w-md-auto responsive-btn">
              Add Assets
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

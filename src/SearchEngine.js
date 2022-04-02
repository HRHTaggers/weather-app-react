import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div>
      <input
        type="search"
        placeholder="  Enter city..."
        className="col-md-8 mt-3 me-3 mb-3 form-entry"
      />
      <span className="col-md-1"></span>
      <input
        type="submit"
        value="Search"
        className="col-md-3 mt-3 mb-3 ms-3 search-button"
      />
    </div>
  );
}
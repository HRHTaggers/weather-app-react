import React from "react";
import "./ConversionButtons.css";

export default function ConversionButtons() {
  return (
    <div className="ConversionButtons">
      <button type="button" className="ConversionButton m-1">
        C
      </button>
      <button type="button" className="ConversionButton m-1">
        F
      </button>
    </div>
  );
}

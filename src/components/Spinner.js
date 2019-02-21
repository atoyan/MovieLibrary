import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "150px", margin: "auto", display: "block" }}
        alt="loading..."
      />
    </div>
  );
}

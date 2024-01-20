import React from "react";
import CV from "../../assets/sofiacv.pdf";

export default function Cta() {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Dowmload CV{" "}
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
}

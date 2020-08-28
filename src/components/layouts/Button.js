import React from "react";
import { Link } from "react-router-dom";

function Button({ image, text, path }) {
  return (
    <div className="button-wrap">
      {path ? (
        <Link to={path}>
          <button className="button-content">
            <p>{text}</p>
            {image}
          </button>
        </Link>
      ) : (
        <button className="button-content">
          <p>{text}</p>
          {image}
        </button>
      )}
    </div>
  );
}

export default Button;

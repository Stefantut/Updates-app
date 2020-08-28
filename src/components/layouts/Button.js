import React from "react";
import { Link } from "react-router-dom";

function Button({ image, text, path }) {
  return (
    <div className="button-wrap">
      {path ? (
        <Link to={path}>
          <div className="button-content">
            <p>{text}</p>
            {image}
          </div>
        </Link>
      ) : (
        <div className="button-content">
          <p>{text}</p>
          {image}
        </div>
      )}
    </div>
  );
}

export default Button;

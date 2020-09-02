import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Forward } from "../images/forward.svg";

export const SectionWrap = ({ leftSection, rightSection }) => {
  return (
    <main className="section-wrap">
      {leftSection}
      {rightSection}
    </main>
  );
};

export function Button({ text, path }) {
  return (
    <div className="button-wrap">
      {path ? (
        <Link to={path}>
          <button className="button-content">
            <p>{text}</p>
            <Forward />
          </button>
        </Link>
      ) : (
        <button className="button-content">
          <p>{text}</p>
          <Forward />
        </button>
      )}
    </div>
  );
}

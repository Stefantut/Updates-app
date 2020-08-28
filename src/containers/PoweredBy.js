import React from "react";

import Logo from "../components/Logo";

function PoweredBy() {
  return (
    <div className="powered-by">
      <p>powered by</p>
      <a href="https://stefantut.dev" target="_blank" rel="noopener noreferrer">
        <Logo />
      </a>
    </div>
  );
}

export default PoweredBy;

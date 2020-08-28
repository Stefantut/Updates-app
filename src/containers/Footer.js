import React from "react";

import { currentYear } from "../utils/helpers";
import PoweredBy from "./PoweredBy";

function Footer() {
  return (
    <footer className="content">
      <div className="credits">
        &copy; {currentYear()} - All rights reserved
      </div>
      <PoweredBy />
    </footer>
  );
}

export default Footer;

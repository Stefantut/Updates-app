import React from "react";

const SectionWrap = ({ leftSection, rightSection }) => {
  return (
    <div className="section-wrap">
      {leftSection}
      {rightSection}
    </div>
  );
};

export default SectionWrap;

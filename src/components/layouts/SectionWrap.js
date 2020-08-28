import React from "react";

const SectionWrap = ({ leftSection, rightSection }) => {
  return (
    <main className="section-wrap">
      {leftSection}
      {rightSection}
    </main>
  );
};

export default SectionWrap;

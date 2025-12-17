import React, { memo } from "react";

const ChildA = ({ Learning, count }) => {
  console.log("child a");
  return <div>ChildA </div>;
};

export default memo(ChildA);

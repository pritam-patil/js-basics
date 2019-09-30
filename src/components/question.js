import React from "react";

const Question = ({ title, code = "" }) => {
  return (
    <>
      <strong>Question:</strong> <span> {title} </span>
      <pre> {code} </pre>
    </>
  );
};

export default Question;

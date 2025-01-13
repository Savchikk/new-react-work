import React from "react";

const Message = ({ author, text }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{text}</p>
      {/* <h4>{props.author}</h4>
      <p>{props.text}</p> */}
    </div>
  );
};

export default Message;

import React from "react";

const Head = (props) => {
  return (
      <div className="side">
          <center>
            <h3>{props.message}</h3>
            <hr className="hr_"></hr>
            <p className="note">{props.note}</p>
            <hr className="_hr"></hr>
          </center>
      </div>
  );
};

export default Head;

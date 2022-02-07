import React from "react";
 
import "./App.css";
function testing(props)
 {
  return (
    <div>
      return 
      <>
        <div id="test1">
          
          Welcome To {props.name}
          <img src={props.photoname} className="img-fluid" alt="" />
        </div>
      </>
    </div>
  );
}

export default testing;

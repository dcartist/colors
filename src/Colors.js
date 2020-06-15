import React from "react";

export default function Colors(props) {
  let theseColors =
    "#000" == props.value
      ? { backgroundColor: `${props.value}`, padding: "10px", color: "white" }
      : { backgroundColor: `${props.value}`, padding: "10px" };
  // let theseColors = {
  //   backgroundColor: `${props.value}`
  // };
  return (
    <div style={theseColors}>
      Color: {props.color}
      <p />
      <p>value:{props.value}</p>
    </div>
  );
}

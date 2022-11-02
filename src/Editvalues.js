import React from "react";
import { useDispatch } from "react-redux";
import {
  updateBgColor,
  updateColor,
  updateText,
} from "./features/Slices/allComponentsSlicer";

export default function Editvalues() {
  const [elementId, setElementId] = React.useState("");
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");

  const dispatch = useDispatch();

  const hadnleUpdate = () => {
    if (!elementId || (!text && !color && !bgColor)) {
      alert("Please fill all the fields");
      return;
    }
    if (elementId && color) {
      dispatch(updateColor({ id: elementId, color }));
    }
    if (elementId && text) {
      dispatch(updateText({ id: elementId, text }));
    }
    if (elementId && bgColor) {
      dispatch(updateBgColor({ id: elementId, bgColor }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        padding: "20px",
        backgroundColor: "lightblue",
        marginBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3>Element Id</h3>
      <input
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
        }}
        type="text"
        name=""
        id=""
        value={elementId}
        onChange={(e) => setElementId(e.target.value)}
      />
      <h3>New text</h3>
      <input
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
        }}
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>New color</h3>
      <input
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
        }}
        type="text"
        name=""
        id=""
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <h3>New background color</h3>
      <input
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
        }}
        type="text"
        name=""
        id=""
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <button
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "lightgreen",
          border: "none",
        }}
        onClick={hadnleUpdate}
      >
        Update
      </button>
    </div>
  );
}

import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ChromePicker } from "react-color";
import { useDispatch } from "react-redux";
import {
  updateColor,
  updateText,
} from "../features/Slices/allComponentsSlicer";
import { useOutsideAlerter } from "../helpers/useOutSideClickAlerter";

function EditableText({ text, style, id }) {
  const [editMode, setEditMode] = React.useState(false);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [currentText, setCurrentText] = React.useState("");
  const [currentColor, setCurrentColor] = React.useState("");

  const ref = React.useRef(null);
  const isOutside = useOutsideAlerter(ref);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOutside) {
      setEditMode(false);
      setShowColorPicker(false);
    }
  }, [isOutside]);

  useEffect(() => {
    setCurrentText(text);
    setCurrentColor(style.color);
  }, [text, style]);

  const handleUpdate = (e) => {
    e.stopPropagation();
    if (currentText && currentText !== text) {
      dispatch(updateText({ id, text: currentText }));
    }

    if (currentColor && currentColor !== style.color) {
      dispatch(updateColor({ id, color: currentColor }));
    }
    setEditMode(false);
    setShowColorPicker(false);
  };

  return (
    <>
      <span ref={ref} onClick={() => setEditMode(true)}>
        {!editMode && text}
        {editMode && (
          <>
            <input
              style={{
                ...style,
                border: "none",
                outline: "none",
                width: "100%",
                color: currentColor,
              }}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              autoFocus
            />
            <Button
              style={{ margin: "0 5px" }}
              className="btn-info"
              variant="info"
              onClick={() => setShowColorPicker(true)}
            >
              Pick color
            </Button>
            <Button
              className="btn-info"
              variant="info"
              onClick={(e) => handleUpdate(e)}
            >
              Update changes
            </Button>
          </>
        )}
        {showColorPicker && (
          <ChromePicker
            color={currentColor}
            onChange={(c) => setCurrentColor(c.hex)}
          />
        )}
      </span>
    </>
  );
}

export default EditableText;

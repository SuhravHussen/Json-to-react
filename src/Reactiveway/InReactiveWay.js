// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import getStyles from "../helpers/GetStyles";
import EditableText from "../Reactiveway/EditableText";
const componentMapper = {
  Section: "section",
  Container: Container,
  Row: Row,
  Column: Col,
  Heading: "h1",
  Img: "img",
  Button: Button,
  Icon: "i",
};

export default function InReactiveWay({ id }) {
  const data = useSelector((state) => state.components.data.data);

  const elementData = data[id];
  const Component = componentMapper[elementData.type] || "div";
  const style = getStyles(
    elementData.settings?.style || elementData.settings?.general?.style || {}
  );
  const className =
    elementData.settings?.className || elementData.settings?.general?.className;

  if (elementData.type === "Img")
    return <img src={elementData.settings.general.img.src} alt="" />;

  if (elementData.type === "Icon")
    return (
      <i
        className={elementData.settings.general.icon}
        style={getStyles(elementData.settings?.general?.icon?.style)}
      />
    );

  if (elementData.type === "Button")
    return (
      <Button style={style} className={className}>
        {elementData.settings.general.text}
      </Button>
    );

  return (
    <Component id={elementData?.id} style={style} className={className}>
      {elementData?.settings?.general?.text && (
        <EditableText
          text={elementData?.settings?.general?.text}
          style={style}
          id={id}
        />
      )}
      {data &&
        elementData &&
        elementData.nodes.map((child) => {
          return <InReactiveWay key={child} id={child} />;
        })}
    </Component>
  );
}

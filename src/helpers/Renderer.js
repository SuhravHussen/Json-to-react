import { createElement } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import sampleData from "../sampleData/sampleData.json";
import propsMaker from "./PropsMaker";

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

export default function renderer(id) {
  const elementData = sampleData.data[id];

  const className =
    elementData.settings?.className || elementData.settings?.general?.className;
  const style =
    elementData.settings?.style || elementData.settings?.general?.style;

  const props = propsMaker(
    style,
    className,
    elementData.settings,
    elementData.type
  );

  let childs = [];

  if (elementData.nodes && elementData.nodes.length > 0) {
    elementData.nodes.forEach((node) => {
      childs.push(renderer(node));
    });
  } else if (!elementData.nodes || elementData.nodes.length === 0) {
    childs.push(elementData.settings.general.text);
  }

  if (elementData.type === "Img") {
    childs = null;
  }
  const component = componentMapper[elementData.type] || "div";
  return createElement(component, props, childs);
}

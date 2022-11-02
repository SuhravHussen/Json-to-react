import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function WithoutJson() {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={6}>
            <div style={{ position: "relative !important", zIndex: "1" }}>
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#f6ba38",
                  marginBottom: "10px",
                }}
              >
                Online course
              </h1>
              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "65px",
                  color: "#173040",
                  textTransform: "capitalize",
                }}
              >
                Nourish your inner skill with
              </h1>
              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "65px",
                  color: "#f6ba38",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                Ezy Course
              </h1>
              <div
                style={{
                  position: "absolute !important",
                  width: "200px",
                  top: "110px",
                  right: "92px",
                }}
              >
                <Image
                  fluid
                  src="https://s4.gifyu.com/images/4516-pencil-animation-unscreen.gif"
                  alt=""
                />
              </div>
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#9a9898",
                  maxWidth: "90%",
                  marginBottom: "20px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "4px 4px 4px 4px",
                    background: "#183040",
                    color: "#f6ba38",
                    fontWeight: "500",
                    fontSize: "17px",
                    lineHeight: "1.2",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Try for free
                </Button>
                <Button
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "4px 4px 4px 4px",
                    border: "1px solid #183040",
                    color: "#f6ba38",
                    fontWeight: "500",
                    fontSize: "17px",
                    lineHeight: "1.2",
                    textTransform: "capitalize",
                    background: "transparent",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div
              style={{
                position: "relative !important",
                zIndex: "1",
                before:
                  'content:"";\nposition:absolute;\ntop: 176px;\nright: 190px;\nwidth:300px;\nheight:300px;\nbackground:#f6ba38;\nfilter:blur(200px);\nz-index: -1;',
              }}
            >
              <Image fluid src="https://i.ibb.co/0F1ChDd/Group-73.png"></Image>
              <div
                style={{
                  position: "absolute !important",
                  top: "140px",
                  right: "68px",
                }}
              >
                <i className="fa-solid fa-book-open"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "absolute !important",
          "    top": "-100px",
          "    right": "-101px",
          "    width": "400px",
          "    transform": "rotate(115deg)",
        }}
      >
        <Image fluid src="https://i.ibb.co/RhWzrvY/blob-1.png" alt="" />
      </div>
    </section>
  );
}

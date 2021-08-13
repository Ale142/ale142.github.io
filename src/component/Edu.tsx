import React from "react";
import { Row, Col, Typography } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "../style.css";
const Fade = require("react-reveal/Fade");

const { Title } = Typography;

function Edu() {
  return (
    <section className="component" id="edu">
      <Fade>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
          style={{ marginTop: "5%" }}
        >
          <Col className="gutter-row" span={12} offset={6}>
            <Title> Education </Title>{" "}
          </Col>
          {/* <Col className = "gutter-row" span = {8}><Title level = {2} > Education </Title> </Col> */}
        </Row>
      </Fade>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
        justify="center"
      >
        {/* <Col className = "gutter-row" span = {8} offset = {10}> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: "rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - present"
            iconStyle={{ background: "rgb(33, 150, 243)" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Polytechnic of Turin
            </h4>
            <p style={{ color: "white" }}>
              Computer Networks and Cloud Computing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: "#283845" }}
            contentArrowStyle={{ borderRight: "7px solid  #283845" }}
            date="2017 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's Degree
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science department, Turin, Italy
            </h4>
            <p style={{ color: "white" }}>110/110 cum laude</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* </Col> */}
        {/* <Col className = "gutter-row" span = {8}><Title level = {2} > Education </Title> </Col> */}
      </Row>
    </section>
  );
}

export default Edu;

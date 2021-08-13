import { Row, Typography, Col, Avatar } from "antd";
import "../style.css";
import avatar from "../img/avatar.jpeg";

const { Title, Paragraph } = Typography;
const Fade = require("react-reveal/Fade");

function About() {
  return (
    <section className="component" id="about">
      <Fade>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
          style={{ marginTop: "5%" }}
        >
          <Col className="gutter-row" span={12} offset={6}>
            <Title> About </Title>{" "}
          </Col>
        </Row>
      </Fade>
      <Fade delay={500}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
        >
          <Avatar
            src={avatar}
            size={{ xs: 50, sm: 50, md: 100, lg: 100, xl: 150, xxl: 200 }}
          ></Avatar>
        </Row>
      </Fade>
      <Fade bottom delay={750}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
        >
          <Col className="gutter-row" span={12} offset={6}>
            <Paragraph>Hi,</Paragraph>

            <Paragraph className="text-4xl">
              I'm Alessandro, 22 years old from Italy. Currently I am Computer
              Engineering student enrolled in the Master of Science degree on
              Computer Networks & Cloud Computing at Politecnico di Torino. I am
              passionate about everything relating to technology, programming,
              sports, TV series and traveling.
            </Paragraph>
          </Col>
        </Row>
      </Fade>
    </section>
  );
}

export default About;

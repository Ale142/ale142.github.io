import { Row, Col, Switch, Popover } from "antd";
import "antd/dist/antd.css";
import "../style.css";
import TypeWriter from "typewriter-effect";
// import {changeTheme} from '../utils/theme';
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

/* Icon home */
import SchoolIcon from "@material-ui/icons/School";
import LinkIcon from "@material-ui/icons/Link";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

const Fade = require("react-reveal/Fade");

function Home(props: any) {
  const handleSwitch = () => {
    if (props.theme === "light") props.changeTheme("dark");
    else props.changeTheme("light");
  };
  return (
    <section className="component" id="home">
      <div className="toggler">
        <Switch
          unCheckedChildren={
            <WbSunnyIcon fontSize="small" style={{ color: "#243133" }} />
          }
          checkedChildren={<Brightness2Icon fontSize="small" />}
          onChange={handleSwitch}
        ></Switch>
      </div>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
        justify="center"
        style={{ height: "40vh" }}
      >
        <Col>
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome!")
                .pauseFor(2000)
                .deleteAll()
                .start();
              typewriter
                .typeString("printf('Welcome!')")
                .pauseFor(2000)
                .deleteAll();

              typewriter
                .typeString("console.log('Welcome!')")
                .pauseFor(2000)
                .deleteAll();

              typewriter
                .typeString("std::cout<<'Welcome!'<<std::endl")
                .pauseFor(2000)
                .deleteAll();
            }}
            options={{
              strings: ["printf(Hello World)"],
              loop: true,
            }}
          />
        </Col>
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
        justify="center"
      >
        <Fade bottom>
          <Col className="gutter-row " span={2}>
            {" "}
            <Popover trigger="hover" placement="bottom" content={<p>About</p>}>
              <EmojiEmotionsIcon
                className="icon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                style={{ fontSize: 40 }}
              />{" "}
            </Popover>
          </Col>
          <Col className="gutter-row" span={2}>
            {" "}
            <Popover
              trigger="hover"
              placement="bottom"
              content={<p>Education</p>}
            >
              <SchoolIcon
                className="icon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() =>
                  document
                    .getElementById("edu")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                style={{ fontSize: 40 }}
              />{" "}
            </Popover>
          </Col>
          <Col className="gutter-row" span={2}>
            {" "}
            <Popover trigger="hover" placement="bottom" content={<p>Links</p>}>
              <LinkIcon
                className="icon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() =>
                  document
                    .getElementById("links")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                style={{ fontSize: 40 }}
              />{" "}
            </Popover>
          </Col>
          <Col className="gutter-row" span={2}>
            {" "}
            <Popover trigger="hover" placement="bottom" content={<p>Skill</p>}>
              <LaptopMacIcon
                className="icon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() =>
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                style={{ fontSize: 40 }}
              />{" "}
            </Popover>
          </Col>
        </Fade>
      </Row>
      <Row align="middle" justify="center">
        <Fade delay={500}>
          <Col>
            <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
              " Life is a set of sequence and {""}
              <span className="underline">if</span> ...{" "}
              <span className="underline">then</span> ...{" "}
              <span className="underline">else</span> constructs. Someone has
              forgotten the most important, the{" "}
              <span className="underline">while</span>
              ... <span className="underline">do</span>, to go back. "
            </blockquote>
          </Col>
        </Fade>
      </Row>
    </section>
  );
}

export default Home;

import React from 'react';
import {Row, Col, Button, Divider, Switch} from 'antd';
import 'antd/dist/antd.css';
import '../style.css';
import TypeWriter from 'typewriter-effect';
// import {changeTheme} from '../utils/theme';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Layout from 'antd/lib/layout/layout';

/* Icon home */ 
import SchoolIcon from '@material-ui/icons/School';
import LinkIcon from '@material-ui/icons/Link';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

import {Fade} from 'react-awesome-reveal';


function Home(props: any) {

    const handleSwitch = () => {
        if(props.theme === 'light')
            props.changeTheme('dark');
        else
            props.changeTheme('light');
    }
    return (
    <section className = "component" id = "home">
        <div className = "toggler">
            
            <Switch unCheckedChildren = {<WbSunnyIcon fontSize = "small" style = {{color: "#243133"}}/>} checkedChildren = {<Brightness2Icon fontSize = "small"/>} onChange = {handleSwitch} ></Switch>
        </div>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" style = {{height:'40vh'}}>
            <Col> 
            <TypeWriter
                onInit={(typewriter) => {
                 typewriter.typeString('Welcome!')
                .pauseFor(2000)
                .deleteAll()
                .start();
                typewriter.typeString("printf('Welcome!')")
                .pauseFor(2000)
                .deleteAll();

                typewriter.typeString("console.log('Welcome!')")
                .pauseFor(2000)
                .deleteAll();

                typewriter.typeString("std::cout<<'Welcome!'<<std::endl")
                .pauseFor(2000)
                .deleteAll();
            }} 
            options = {{
                strings: ["printf(Hello World)"],
                loop:true
            }}/>
            </Col>
        </Row>
       
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" >
            <Fade triggerOnce={true} direction="up">
            <Col className="gutter-row" span={2}>  <EmojiEmotionsIcon className="icon" onClick = {() => document.getElementById("about")?.scrollIntoView({behavior:'smooth', block:'start'})} style = {{fontSize:40}}/> </Col>
            <Col className="gutter-row" span={2}> <SchoolIcon className="icon" onClick = {() => document.getElementById("edu")?.scrollIntoView({behavior:'smooth', block:'start'})} style = {{fontSize:40}}/> </Col>
            <Col className="gutter-row" span={2}> <LinkIcon  className="icon" onClick = {() => document.getElementById("links")?.scrollIntoView({behavior:'smooth', block:'start'})} style = {{fontSize:40}}/>  </Col>
            <Col className="gutter-row" span={2}> <LaptopMacIcon className="icon" onClick = {() => document.getElementById("skills")?.scrollIntoView({behavior:'smooth', block:'start'})} style = {{fontSize:40}}/>  </Col>
            </Fade>
        </Row> 
      
    </section>
    );
}
// const style = { background: '#0092ff', padding: '8px 0', margin: '10px'};

// function Home() {
//     return (
//         <>
//         <Divider orientation="left">Horizontal</Divider>
//     <Row gutter={16}>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//     </Row>
//     <Divider orientation="left">Responsive</Divider>
//     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center">
//       <Col className="gutter-row" span={2}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={2}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={2}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={2}>
//         <div style={style}>col-6</div>
//       </Col>
//     </Row>
//     <Divider orientation="left">Vertical</Divider>
//     <Row gutter={[16, 24]}>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//       <Col className="gutter-row" span={6}>
//         <div style={style}>col-6</div>
//       </Col>
//     </Row>
//     </>
//     )
// }

export default Home;
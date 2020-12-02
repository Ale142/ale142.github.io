import React, { Component } from "react";
import {Row,Col,Image} from 'react-bootstrap';

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'
import linkedin from '../img/linkedin.png';
import github2 from '../img/GitHub-Mark-120px-plus.png';

export default function About(props){
    return ( 
        <div class = "section" id = "#link" ref = {props.ref}>
            <Fade left><h2> You can find me @ . . . </h2></Fade>
            <Row>
                <Col>
                <Flip left delay = {1000}>
                    <a href = "https://www.linkedin.com/in/alessandro-bacci-98b0551b8/"><Image  src={linkedin} rounded  width = "100"></Image></a>
                </Flip> 
                </Col>
                <Col>
                <Flip left delay = {1000}>
                    <a href = "https://github.com/Ale142"> <Image  src={github2} rounded  width = "100"></Image></a>
                </Flip>
                </Col>
               
            </Row>
        </div>
    );
    
}
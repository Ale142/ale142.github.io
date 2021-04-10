import { render } from '@testing-library/react';
import React from 'react';
import {Row, Image, Col, Typography, Button} from 'antd';
import '../style.css';
import {getTheme} from '../utils/theme';
import linkedin from '../img/linkedin.png';
import github_light from '../img/github-logo-light.png';
import github_dark from '../img/github-logo-dark.png';
import twitter from '../img/twitter.png';

const {Title} = Typography;

function Links(props: any) {
    return (
        
        <section className = "component" id = "links">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" style ={{marginTop:"5%"}}>
                <Col className = "gutter-row" span = {12} offset = {6} ><Title> Links </Title> </Col>
            </Row>
            <Row  align = "middle" justify = "center" style = {{marginTop: "5%"}}>
                <Col  xs={12} sm = {4} md={4}> 
                    <Button type = "link" href = "https://www.linkedin.com/in/alessandro-bacci-98b0551b8"><Image src = {linkedin} width = {100} preview = {false}/> </Button>
                </Col>
                <Col xs={12} sm = {4} md = {4}>  
                    {props.theme === 'light' ?  <Button type = "link" href = "https://github.com/Ale142"><Image src = {github_dark} width = {100} preview = {false}/></Button> : <Button type = "link" href = "https://github.com/Ale142"><Image src = {github_light} width = {100} preview = {false}/> </Button>}
                </Col>
                {/* <Col className="gutter-row" span={2}> 
                    <Image src = {twitter} width = {150} preview = {false}/> 
                </Col> */}
            </Row>
        </section>
        
    );
}

export default Links;

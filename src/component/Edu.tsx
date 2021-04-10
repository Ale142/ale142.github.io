import React from 'react';
import {Row, Col, Typography, Layout, Timeline} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

import '../style.css';


const {Title, Paragraph} = Typography;

function Edu() {
    return (
        <section className = "component" id = "edu">
             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" style ={{marginTop:"5%"}}>
                <Col className = "gutter-row" span = {12} offset = {6}><Title > Education </Title> </Col>
                {/* <Col className = "gutter-row" span = {8}><Title level = {2} > Education </Title> </Col> */}
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" >
            <Col className = "gutter-row" span = {8} offset = {10}>
                <Timeline mode = "alternate">
                    <Timeline.Item dot = {<ClockCircleOutlined/>}>
                    Computer Engineering Master Degree Turin, Politecnico di Torino 2020 - present
                    </Timeline.Item>
                    <Timeline.Item color = "green">
                    Bachelor Degree Turin, CS Department 2017-2020
                    </Timeline.Item>
                </Timeline>
            </Col>
            {/* <Col className = "gutter-row" span = {8}><Title level = {2} > Education </Title> </Col> */}

            </Row>
        </section>
    )
}

export default Edu;
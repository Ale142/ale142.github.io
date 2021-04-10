import React from 'react';
import '../style.css';
import {Row, Col, Typography} from 'antd'
import {Fade} from 'react-awesome-reveal';
const { Title, Paragraph} = Typography;

function Skills() {
    return (
        <section className = "component" id = "skills">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" style ={{marginTop:"5%"}}>
               
                <Col className = "gutter-row" span = {12} offset = {6}><Title> Skills </Title></Col>
                
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align = "middle" justify = "center" >
                
                <Col className = "gutter-row" span = {12} offset = {6}>
               
                    <Paragraph>
                    During my studies I learned several programming languages ​​such as <strong>Java</strong>, <strong>C</strong>, <strong>Javascript</strong> and a little bit of Haskell during my Bachelor's degree.
I am currently studying <strong>C++</strong>, <strong>Assembler</strong> for ARM Cortex M3 and the <strong>React</strong> framework (also used for this page!).

                    <Paragraph> As for the database languages, I studied <strong>SQL</strong> and <strong>MongoDB</strong>. </Paragraph>
                    </Paragraph>
                   
                </Col>
               
            </Row>
        </section>
    );
}

export default Skills;
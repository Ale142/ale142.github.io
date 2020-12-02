import React, { Component } from "react";
import '../App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function MyTimeline(){
    return ( 
       

        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#395B50', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #395B50' }}
            date="2020 - present"
            iconStyle={{ background: '#395B50', color: '#fff' }}
            
        >
            <h3 className="vertical-timeline-element-title">Computer Engineering Master Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Turin, Politecnico di Torino</h4>
            <p>
             Currently studing Computer Networks and Cloud Computing at Politecnico di Torino.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#395B50', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #395B50' }}
            date="2017 - 2020"
            iconStyle={{ background: '#395B50', color: '#fff' }}
            
        >
            <h3 className="vertical-timeline-element-title">Bachelor Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Turin, CS Department</h4>
            <p>
             Bachelor Degree in Computer Science 110/110 cum laude
            </p>
        </VerticalTimelineElement>
       
        </VerticalTimeline>
    );
    
}
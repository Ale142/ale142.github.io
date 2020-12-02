import React, { Component } from "react";

import profilePic from '../img/profile-pic.jpeg';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default function About(){
    return ( 
        <div class = "section" id = "#about">
            
            <Flip left>
                    <img src = {profilePic} width = "200" height = "200" style = {{objectFit:"cover", borderRadius:"50%"}}></img>
            </Flip>
            <Fade bottom><p style = {{marginTop: "20px"}}> I'm Alessandro, 22 years old from Italy. Currently I am Computer Engineering 
            student enrolled in the Master of Science degree on <em> Computer Networks & Cloud Computing</em> at Politecnico di Torino.
            I am passionate about everything relating to technology, programming, sports, TV series and traveling.

            
            </p>
            </Fade>
        </div>
    );
    
}
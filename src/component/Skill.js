import React from "react";
import {Table} from 'react-bootstrap'
import Fade from 'react-reveal'

const skills = {
  "Web": ["ReactJS", "HTML", "Javascript"],
  "Programming":["C","Java","PHP","Python", "C++"],
  "DataBase": ["SQL", "MongoDB", "Oracle"],
  "Software": ["VS Code", "IntelliJ", "RapidMiner"]
}


export default function Skill(){
    return ( 
    <div class = "section" id = "skill" style = {{marginTop: "10px"}}>
      <Fade>
      <Table responsive borderless = {true} style = {{color: "#B1B6A6"}}>
        <thead>
        <tr>
          <th> Web</th> 
          <th> Programming</th> 
          <th> Database</th>
          <th> Software</th>
        </tr>
        </thead>
        <tbody>
        <tr>
           <td> ReactJS </td>
           <td> C </td>
           <td> SQL </td>
           <td> VS Code </td>
        </tr>
        <tr>
           <td> HTML </td>
           <td> Java </td>
           <td> MongoDB </td>
           <td> IntelliJ </td>
        </tr>
          <tr>
           <td> Javascript </td>
           <td> PHP </td>
           <td> Oracle </td>
           <td>  </td>
        </tr>
        <tr>
           <td></td>
           <td> Python </td>
           <td></td>
           <td></td>
        </tr>
        <tr>
          <td></td>
          <td> C++ </td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </Table>
      </Fade>

      
    </div>
    );
    
}


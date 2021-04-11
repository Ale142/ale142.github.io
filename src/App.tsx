import React, { useEffect, useState } from 'react';
import { Layout, BackTop } from 'antd';
import Home from './component/Home'
import About from './component/About'
import Edu from './component/Edu'
import Links from './component/Links'
import Skills from './component/Skills'

const {Header, Footer, Content, Sider} = Layout;



function App() {

  
  const [theme, setTheme] = useState<string>("light");

  useEffect (() => {
    if(localStorage.getItem('theme')) {
      console.log("here");
      if(localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.className = 'dark';
      } else if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'light');
        document.documentElement.className = 'light';
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.className = 'light';
      } 
    }
    console.log(document.documentElement.className);
  });

  useEffect( () => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme])

  
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  }
  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container: any) => {
    console.log(container);
  } 

  return (
   <Layout>
     
    
        {/* <Sider style = {{display: 'flex', maxWidth: "0px !important", width:'0px', minWidth: visible ? '200px' : '0px', flex: '0 0 0'}}> </Sider> */}
        
        <Content>
          <Home changeTheme = {changeTheme} theme = {theme}></Home>
         
          <About></About>
          <Edu></Edu>
          <BackTop/>
          <Skills></Skills>
          <Links theme = {theme}></Links>
        </Content>
        <Footer>Page developed with React and Typescript <br/> © 2021 Alessandro Bacci</Footer>
        
     
    
     
   </Layout>

  );
}

export default App;

import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Skill from './Skill/Skill';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
      return (
            <div id="home">
                <Banner></Banner>
                <About></About>
                <Skill></Skill>
                <Projects></Projects>
                <Contact></Contact>
             
            </div>
      );
};

export default Home;
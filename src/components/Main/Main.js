import React from 'react'
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
const Main = () => {
    return (
        <div id="Main">
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Main

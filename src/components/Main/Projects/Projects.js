import React from 'react'
import SvgFiles from '../../SvgFiles'
import {StyledProjects} from './ProjectsStyles'
import loginWebClassIMG from "../../../img/Login-WebClass.jpg"
const Projects = () => {
    return (
        <StyledProjects>
            <h2><span>P</span>rojects</h2>
            <div className="project">
                <div className="showPhotos">
                    <button id='BtnPrev'><SvgFiles icon="Arrow"/></button>
                    <img src={loginWebClassIMG} alt="project images"/>
                    <button id="BtnNext"><SvgFiles icon="Arrow"/></button>
                </div>
                <div className="projectInfo">
                    <h3>WebClass</h3>
                    <p>
                        Projeto de interface simulando um site de cursos,
                        desenvolvido utilizando React, Redux, React Router,
                        JavaScript, Styled Components, Create React-App e seu 
                        Protótipo feito no Adobe XD
                    </p>
                    <div className="projectTags">
                        <span><SvgFiles/> Briefing</span>
                        <span><SvgFiles/> Web Design</span>
                        <span><SvgFiles/> Responsive Design</span>
                    </div>
                    <button>Live</button>
                    <button>Go to Files</button>
                </div>
            </div>
            <div id="soon">
            <h3>More Projects Soon<br></br>...</h3>
            </div>
        </StyledProjects>
    )
}

export default Projects

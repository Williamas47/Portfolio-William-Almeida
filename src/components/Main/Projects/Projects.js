import React from 'react'
import SvgFiles from '../../SvgFiles'
import {StyledProjects} from './ProjectsStyles'
import homeWebClassIMG from "../../../img/WebClass-home.png"
import pricesWebClassIMG from "../../../img/WebClass-prices.png"
import mobileWebClassIMG from "../../../img/WebClass-mobile.png"
import testimunialsWebClassIMG from "../../../img/WebClass-testimunials.png"
import loginWebClassIMG from "../../../img/WebClass-login.jpg"
import coursesWebClassIMG from "../../../img/WebClass-courses.jpg"
import courseWebClassIMG from "../../../img/WebClass-course.jpg"
import Button from '../../Button'
const Projects = () => {
let $images = document.getElementsByClassName("projectImage");
console.log($images);

    return (
        <StyledProjects id="Projects">
            <h2><span>P</span>rojects</h2>
            <div className="project">
                <div className="showPhotos">
                    <button id='BtnPrev'><SvgFiles icon="Arrow"/></button>
                    <button id="BtnNext"><SvgFiles icon="Arrow"/></button>
                    <div id="imgDisplay">
                        {/* <img id="closeImg" className="projectImage" src={loginWebClassIMG} alt="project images"/> */}
                        <ul>
                        <li><img alt="Home Webclass" className="projectImage" src={homeWebClassIMG}/></li>
                        <li><img alt="Prices Webclass" className="projectImage" src={pricesWebClassIMG} /></li>
                        <li><img alt="Mobile WebClass" className="projectImage" src={mobileWebClassIMG} /></li>
                        <li><img alt="Testimunials WebClass" className="projectImage" src={testimunialsWebClassIMG}/></li>
                        <li><img alt="Login WebClass" className="projectImage" src={loginWebClassIMG}/></li>
                        <li><img alt="Courses WebClass" className="projectImage" src={coursesWebClassIMG} /></li>
                        <li><img alt="Course WebClass" className="projectImage" src={courseWebClassIMG} /></li>
                        </ul>
                    </div>
                </div>
                {/* <span id="middleDiv"></span> */}
                <div className="projectInfo">
                    <h3>WebClass</h3>
                    <p>
                        Projeto de interface simulando um site de cursos,
                        desenvolvido utilizando React, Redux, React Router,
                        JavaScript, Styled Components, Create React-App e seu 
                        Protótipo feito no Adobe XD
                    </p>
                    <div className="projectTags">
                        <span><SvgFiles icon="DesignIcon"/> Briefing</span>
                        <span><SvgFiles icon="ComputerIcon"/> Web Design</span>
                        <span><SvgFiles icon="CellPhoneIcon"/> Responsive Design</span>
                    </div>
                    <div id="projectButtons">
                        <Button id="liveBtn" width="75px">
                            <span>Live</span>
                        </Button>
                        <Button id="filesBtn" width="115px">
                            <span>Go to Files</span>
                        </Button>
                    {/* <button>Live</button> */}
                    {/* <button>Go to Files</button> */}
                    </div>
                </div>
            </div>
            <div id="soon">
            <h3>More Projects Soon<br></br>...</h3>
            </div>
        </StyledProjects>
    )
}

export default Projects

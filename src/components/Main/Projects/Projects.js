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
let [img, setImg] = React.useState(false);
let [pos, setPos] = React.useState(0);
let numImages = $images.length;
let $NextBtn = document.getElementById("BtnNext");
let $PrevBtn = document.getElementById("BtnPrev");

function check({target}){
    setImg(!img);
    if (img){
        $NextBtn.style.cursor= "not-allowed";
        $NextBtn.disabled = true;
        $PrevBtn.disabled = true;
        $PrevBtn.style.cursor= "not-allowed";

        target.style.position = "absolute";
         
        target.classList.add("openImg");
        target.classList.remove("closeImg");
        target.style.cursor = "zoom-out";
        for (let i = 0; i < $images.length; i++){
            if($images[i] === target){
                console.log(`Esse: ${target}, ${i}`)
                setPos(i);
            }else{
                console.log("Nao");
            }
        }
    }else{
        $NextBtn.style.cursor= "pointer";
        $NextBtn.disabled = false;
        $PrevBtn.disabled = false;
        $PrevBtn.style.cursor= "pointer";

        target.style.cursor = "zoom-in";
        target.classList.add("closeImg");
        target.classList.remove("openImg");
        }
}

function nextPrev({target}){
    if (numImages === 0 ){
        return "";
    }
    let $carrousel = document.getElementById("carrousel");
    let actualButton = target.id;
    if (actualButton === "BtnNext"){
        if (pos < numImages -1){
            pos ++
        }else{
            pos = 0;
        }
        let numb = 551.34 * pos;
        $carrousel.style.marginLeft= `-${numb}px`; 
    }else{
        if (pos < numImages -1 && pos !== 0){
            let numb = 551.34 * pos;
            pos --
            $carrousel.style.marginLeft= `-${numb - 551.34}px`; 
        }else if (pos === 0){
            pos = 6;
            let numb = 551.34 * pos;
            $carrousel.style.marginLeft= `-${numb}px`; 
        }else{
            let numb = 551.34 * pos;
            $carrousel.style.marginLeft= `-${numb - 551.34}px`; 
            pos --;
        }
    }
}
    return (
        <StyledProjects id="Projects">
            <h2><span>P</span>rojects</h2>
            <div className="project">
                <div className="showPhotos">
                    <button id="BtnPrev" className="photosBtn"onClick={nextPrev}><SvgFiles icon="Arrow" disabled/></button>
                    <button id="BtnNext" className="photosBtn"onClick={nextPrev}><SvgFiles icon="Arrow"/></button>
                    <div id="imgDisplay">
                        {/* <img id="closeImg" className="projectImage" src={loginWebClassIMG} alt="project images"/> */}
                        <ul id="carrousel">
                        <li><img alt="Home Webclass" className="projectImage" src={homeWebClassIMG} onClick={check}/></li>
                        <li><img alt="Prices Webclass" className="projectImage" src={pricesWebClassIMG} onClick={check}/></li>
                        <li><img alt="Mobile WebClass" className="projectImage" src={mobileWebClassIMG} onClick={check}/></li>
                        <li><img alt="Testimunials WebClass" className="projectImage" src={testimunialsWebClassIMG}onClick={check}/></li>
                        <li><img alt="Login WebClass" className="projectImage" src={loginWebClassIMG}onClick={check}/></li>
                        <li><img alt="Courses WebClass" className="projectImage" src={coursesWebClassIMG} onClick={check}/></li>
                        <li><img alt="Course WebClass" className="projectImage" src={courseWebClassIMG} onClick={check}/></li>
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

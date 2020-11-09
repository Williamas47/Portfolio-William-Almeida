import React from 'react'
import {StyledSkills} from "./SkillsStyles";
const Skills = () => {
    return (
        <StyledSkills>
            <h2><span>S</span>kills</h2>
            <section id='skillsContent'>
                <div id="webDev">
                    <h3>Web Development</h3>
                    <div className="skillItems">
                        <div className="skillSection advKnlg">
                            <h4>Advanced Knowlege</h4>
                            <div className="skills">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            </div>
                        </div>
                        <div className="skillSection medKnlg">
                            <h4>Medium Knowlege</h4>
                            <div className="skills">
                            <span>Jest</span>
                            <span>Git</span>
                            <span>Redux</span>
                            </div>
                        </div>
                        <div className="skillSection basKnlg">
                            <h4>Basic Knowlege</h4>
                            <div className="skills">
                                <span>NextJS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="webDes">
                    <h3>Web Design</h3>
                    <div className="skillItems">
                        <div className="skillSection advKnlg">
                            <h4>Advanced Knowlege</h4>
                            <div className="skills">
                            <span>AdobeXD</span>
                            <span>StyledComponents</span>
                            <span>Flexbox</span>
                            </div>
                        </div>
                        <div className="skillSection medKnlg">
                            <h4>Medium Knowlege</h4>
                            <div className="skills">
                                <span>Sass</span>
                                <span>Photoshop</span>
                                <span>UI/UX</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                        <div className="skillSection basKnlg">
                        <h4>Basic Knowlege</h4>
                            <div className="skills">
                                <span>Material UI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="learning">
                    <h3>Learning</h3>
                    <div className="skillItems">
                        <div className="skillSection learning"> 
                            <span>NodeJS</span>
                            <span>ExpressJS</span>
                            <span>NextJS</span>
                            <span>TypeScript</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                            <span>SEO</span>
                        </div>
                    </div>
                </div>
            </section>
        </StyledSkills>
    )
}

export default Skills

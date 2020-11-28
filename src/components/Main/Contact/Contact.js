import React from 'react'
import Button from '../../Button';
import {StyledContact} from "./ContactStyles";
const Contact = () => {
    return (
        <StyledContact id="Contact">
              <h2><span>C</span>ontact</h2>
            <div id="contactContent">
            <div id="contactLeft">
              <form>
                  <label>
                      <p>Name</p>
                      <input type="text"/>
                  </label>
                  <label>
                      <p>Email</p>
                      <input type="email"/>
                  </label>
                  <label>
                      <p>Subject</p>
                      <input type="text"/>
                  </label>
                  <label>
                      <p>Message</p>
                      <textarea/>
                  </label>
                  <Button width="75px">
                     <span>Send</span>
                  </Button>
              </form>
            </div>
            <div id="contactRight">
                <div id="map">
                    
                    {/* <iframe title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95664.66331396684!2d-51.179211489408594!3d-30.03826761032971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975eaf6bd01dd%3A0xcb9daf995eea188c!2sR.%20Jo%C3%A3o%20de%20Deus%20Oliveira%20-%20Bela%20Vista%2C%20Alvorada%20-%20RS%2C%2094810-290!5e0!3m2!1spt-BR!2sbr!4v1605371095890!5m2!1spt-BR!2sbr" 
                    height="450" frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe> 
                    */}
                    <div id="contactInfos">
                        <p>
                            Rio Grande do Sul,<br></br>
                            Alvorada - Bela Vista<br></br>
                            +55 (51) 98548-5107<br></br>
                            williamas66@gmail.com
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
        </StyledContact>
    )
}

export default Contact

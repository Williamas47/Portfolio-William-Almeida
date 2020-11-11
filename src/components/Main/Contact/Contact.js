import React from 'react'
import {StyledContact} from "./ContactStyles";
const Contact = () => {
    return (
        <StyledContact>
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
                  <button>Send</button>
              </form>
            </div>
            <div id="contactRight">
                <div id="map">
                    <div id="contactInfos">
                        <p>
                            Rio Grande do Sul,
                            Alvorada - Bela Vista
                            (51) 985485107
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

import React from 'react'
import {StyledContact} from "./ContactStyles";
const Contact = () => {
    return (
        <StyledContact>
            <div id="contactLeft">
              <h2><span>C</span>ontact</h2>
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
                      <p>Subkect</p>
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
                    <span id="contactInfos">
                        <p>
                            Rio Grande do Sul,
                            Alvorada - Bela Vista
                            (51) 985485107
                            williamas66@gmail.com
                        </p>
                    </span>
                </div>
                
            </div>
        </StyledContact>
    )
}

export default Contact

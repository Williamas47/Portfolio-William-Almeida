import React from 'react'
import styled from "styled-components";

const Button = ({id, width, height, children, afterW, afterH}) => {
 
    const StyledButton = styled.button`
    /* margin-top: 500px; */
    /* margin-bottom: 500px; */
        border: 1px solid var(--secundary-color);
        background: transparent;
        color: var(--text-primary-color);
        border-radius: 5px;
        height: 45px;
        width: ${width};
        /* ${height = "45px"} */
        padding: 0 10px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        &:before{
            content: "";
                position:absolute;
                width: 0;
                height: 0;
                transition: 1.5s ease;
                left: 50%;
                top: 50%;
                border-radius: 50%;
                z-index: 1;
        }
        &:hover{
            span{
                position: absolute;
                z-index: 2;
                background: transparent;
                /* left: 29%; */
                /* left: calc(${width} - 72.85%); // ^ <=  // v => */
                /* left: calc(${width}); */

                /* left: calc(${width} - calc(${width} - 28%)); // ^ <=  // v => */
                /* top: 33%; */
            }
            &:before{
                width: calc( ${width} * 1.25);
                height: calc( ${width} * 1.25);
                left: calc(50% - calc(calc(${width} * 1.25) / 2));
                top: calc(50% - calc(calc(${width} * 1.25) / 2));
                background:  var(--secundary-color); 
            }
        }
    `;
        return (
        <StyledButton id={id}>
            {children}
        </StyledButton>
    )
}

export default Button

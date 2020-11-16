import styled from "styled-components";

    const Button = styled.button`
        border: 1px solid var(--secundary-color);
        background: transparent;
        color: var(--text-primary-color); 
        border-radius: 5px;
        height: 45px;
        width: ${props => props.width ? props.width : 'auto'};
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
            }
            &:before{
                width: calc( ${props => props.width} * 1.25);
                height: calc( ${props => props.width} * 1.25);
                left: calc(50% - calc(calc(${props => props.width} * 1.25) / 2));
                top: calc(50% - calc(calc(${props => props.width} * 1.25) / 2));
                background:  var(--secundary-color); 
            }
        }
    `;
export default Button;
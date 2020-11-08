import styled from "styled-components";

export const StyledHome = styled.div`
    height: 120vh;
    padding-top: 10%;
    padding-left: 5%;
    h1{
        color: var(--text-primary-color);
        font-size: 4.5em;
        /* text-decoration: italic; */
        font-weight: bold;
        /* background: transparent; */
        span{
            color: var(--secundary-color);
        }
    } 
    h3{
        color: var(--text-primary-color);
        font-weight: lighter;
    }
    p{
        color: var(--text-primary-color);
    }
    p.description{
        width: 80%;
        margin: 25px 0;
    }

    button{
        border: 1px solid var(--secundary-color);
        background: transparent;
        color: var(--text-primary-color);
        border-radius: 5px;
        padding: 12px 39px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover{
            /* background: var(--secundary-color); */
        }
    }
    button#contactMe{
        margin-right: 15px;
        &:before{
            content: "";
            position:absolute;
            width: 1px;
            height: 1px;
            left: 50%;
            top: 50%;
            border-radius: 50%;
        }
        &:hover:before{
            width:200px;
            height: 100px;
            transition: 1.5s ease;
            top: -65%;
            left: -15%;
            background: #63d492;
            background:  var(--secundary-color); 
            z-index: 1;
        }
    }
`;
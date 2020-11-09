import styled from "styled-components";

export const StyledHome = styled.div`
    height: 100vh;
    padding-top: 10%;
    padding-top: 105px;
    /* padding-left: 5%; */
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
    #mainButtons{
        display: flex;
        align-items: center;
    }
    button{
        border: 1px solid var(--secundary-color);
        background: transparent;
        color: var(--text-primary-color);
        border-radius: 5px;
        /* padding: 12px 39px; */
        width: 150px;
        height: 45px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover{
            /* background: var(--secundary-color); */
        }
    }
    button#contactMe{
        margin-right: 5px;
        &:before{
            content: "";
            transition: 1.5s ease;
            position:absolute;
            width: 1px;
            height: 1px;
            left: 50%;
            top: 50%;
            border-radius: 50%;
            z-index: 1;
        }
        &:hover:before{
            /* width: 148px; */
            /* height: 43px; */

            width: 175px;
            height: 175px;
            transition: 1.5s ease;
            /* transition: top 0s, left 0s, width 1.5s, height 1.5s; */
            /* border-radius: 0px; */
            /* transition: 1.5s, border-radius 2s; */
            left: -10%;
            top: -150%;
            /* top: -65%; */
            /* left: -15%; */
            background: #63d492;
            background:  var(--secundary-color); 
            z-index: 1;
        }
    }
    button#downloadCurriculum{
        width: 50px;
        padding-right: 3px;
        padding-top: 3px;
    }
`;
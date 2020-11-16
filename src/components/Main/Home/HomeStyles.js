import styled from "styled-components";

export const StyledHome = styled.section`
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
   
        button{
            border: 1px solid var(--secundary-color);
            background: transparent;
            color: var(--text-primary-color);
            border-radius: 5px;
            /* padding: 12px 39px; */
            height: 45px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
    
        button#contactMe{
            width: 150px;
            margin-right: 5px;
            &:hover span{
                left: 26.9%;
                top: 33%;
            }
            /* &:before{
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
            &:hover{
                span{
                    position: absolute;
                    background: transparent;
                    z-index: 2;
                    margin: 0 auto;
                    left: 26.9%;
                    top: 33%;
                }
                &:before{
                    width: 175px;
                    height: 175px;
                    transition: 1.5s ease;
                    left: calc(50% - calc(175px / 2));
                    top: calc(50% - calc(175px / 2));
                    background:  var(--secundary-color); 
                    z-index: 1;
                }
            } */
        }
        button#downloadCurriculum{
            width: 50px;
            /* padding-right: -3px; */
            padding-top: 3px;
            position: relative;
            transition: 1s ease; 
            span{
                /* display: none; */
                width: 0px;
                height: 0px;
                opacity: 0;
                display: inline-block;
            }
            svg{
                /* margin-right: -3px; */
                z-index: 3;
                left: 3px;
                width: 27px;
                height: 30px;
                /* padding-top: 3px; */
                position: absolute;
                left: calc(calc(50% - calc( 27px / 2)) - 2px);
                top: calc(50% - calc(30px / 2));
                background: transparent;
            } 
            &:before{
                /* transition: width 1.5s height 6s; */
                left: -50%;
            }
            &:hover{
                display: flex;
                align-items: center;
                width: 185px; 
                transition: 1s ease; 
                transition-delay: 0.3s;
                svg{
                   position: absolute;
                   left: 80%;
                   background: transparent;
                   transition-delay: 0.3s;
                }

                span{
                    display: inline-block;
                    height: auto;
                    width: auto;
                    width: 127.5px;
                    opacity: 1;
                    margin-right: 10px;
                    text-align: center;
                    transition: opacity 2s width 1s ease;
                    transition-delay: 0.3s;
                }
                &:before{
                    height: 100px;
                    width: 225px;
                    top: calc(50% - calc(100px / 2)); 
                    left: -10px; 
                    transition: width 2.5s;
                    transition-delay: 0.3s;
                }
            }
        }
    }
`;
import styled, {keyframes} from 'styled-components';
const imgAnimationIn = keyframes`
    0%{  position: absolute; box-shadow: 0px 0px 1px 700px rgb(0,0,0, 70%), 1px 1px 10px 3px rgb(255, 255, 255, 60%); };
    75%{ position: absolute; margin-left: 40%;}
    100% 
    {
        transform: scale(1.5);
        position: absolute;
        margin: 15px auto;
        box-shadow: 0px 0px 1px 700px rgb(0,0,0, 70%), 1px 1px 10px 3px rgb(255, 255, 255, 60%);
        z-index: 4;
        margin-left: 40%;   
    };
`
const imgAnimationOut = keyframes`
    0%{  
        transform: scale(1.5);
        position: absolute;
        margin: 15px auto;
        z-index: 4;
        margin-left: 40%; 
    };   
    25%{ position: absolute; margin-left: 40%;};
    100%{ };
` 
export const StyledProjects = styled.section`
    height: 100vh;
    color: var(--text-primary-color);
    padding-top: 15px;
    h2{
        font-size: 2.5em;
        span{ color: var(--secundary-color)};
        margin-bottom: 25px;
    }
    .project{
        display: flex;
        width:95%;
        margin: 0 auto;
        /* flex: 0 50%; */
        /* border: 2px solid red; */
        gap: 75px;
        /* align-items: space-between; */
        justify-content: space-between;
        align-items: center;
        position: relative;
        /* border: 3px solid red; */
        /* margin: 0 auto; */
        .showPhotos{
            /* background: #151E3C; */
            background: #151E29;
            padding: 15px;
            border-radius: 5px;
            min-width: 581.34px;
            width: 55%;
            height: 350px;
            display: flex;
            align-items: center;

            position: relative;
            /* overfloW: hidden; */

            #imgDisplay{
                margin: 0 auto;
                width: 100%;
                height: 100%;
                z-index: 2;
                
                position: relative;
                overflow: hidden;
                ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    float: left;
                    width: auto;
                    /* margin-left: -150px; */
                    /* position: relative; */
                    /* width: 100%; */
                    /* height: 100%; */

                    /* width: auto; */
                    /* display: inline-block; */
                    /* display: block; */
                    transition: 1.5s ease;
                    li{
                        /* position: relative; */
                        /* display: block; */
                        /* width: 100%; */
                        /* height: 100%; */
                        margin: 0;
                        padding: 0;
                        width: 551.344px;
                        height: 320px;
                        float: left;
                        /* transition: 3s ease; */
                        img{

                  
                            /* position: absolute; */
                        }
                        }
                    }

                /* 
                .projectImage{
                     display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    border: 2px solid red;
                    display: inline;
                    width: auto; 
                } 
                */
                img{
                    /* width: auto; */
                    cursor: zoom-in;
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    transition: box-shadow 0s, transform 0.5s, margin-left 0.5s ;
                    /* animation: ${imgAnimationOut} 0.5s forwards; */
                    &.openImg{animation: ${imgAnimationIn} 2s forwards; }
                    &.closeImg{animation: ${imgAnimationOut} 0.5s forwards; }
                }
            }
            button{
                position: absolute;
                top: 45%;
                background: transparent;
                border: 0px;
                padding: 5px;
                color: var(--text-primary-color);
                cursor: pointer;
                svg{
                    pointer-events: none;
                    z-index: 3;
                    background: transparent;
                }
            }
            #BtnPrev{
                left: -15px;
                svg{transform: rotate(180deg); }
                    transition: 0.5s ease;
                &:hover{
                    /* transform: scale(1.1); */
                    left: -20px;
                    transition: 0.5s ease;
                }
            }
            #BtnNext{
                 right: -15px;
                 transition: 0.5s ease;
                &:hover{
                    /* transform: scale(1.1); */
                    right: -20px;
                    transition: 0.5s ease;
                } 
            }
        }
        .showPhotos:after{
            content: "";
            position: absolute;
            width: 1px;
            height: 90%;
            background: var(--secundary-color);
            right: -50px;
            z-index: 1;
        }


        .projectInfo{
            width: 40%;
            height: 375px;
            position: relative;
            /* border: 1px solid blue; */
            /* padding-left: 30px; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3{
                font-size: 1.8em;
            }
            p{
                padding: 15px 0;
                width: 75%;
                width: 90%;
            }
            .projectTags{
                padding-bottom: 25px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 15px;
                span{
                    display: flex;
                    align-items: center;
                    svg{
                    margin-right: 10px;
                    width: 25px;
                    height: 30px;
                    }
                }
            }
            #projectButtons{
                button{
                    margin-right: 15px;
                    &:hover#liveBtn span{
                        left: 34%;
                        top: 33%;
                    }
                    &:hover#filesBtn span{
                        top: 33%;
                        left: 22%;
                    }
                }
            }
        }
    }
    #soon{
        margin-top: 75px;
        text-align: center;
        }
`;
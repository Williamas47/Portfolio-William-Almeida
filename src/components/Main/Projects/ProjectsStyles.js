import styled from 'styled-components';
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
            position: relative;
            width: 55%;
            height: 350px;
            display: flex;
            align-items: center;
            /* overfloW: hidden; */
            #imgDisplay{
                margin: 0 auto;
                width: 100%;
                height: 100%;
                z-index: 2;
                img{
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    transition: box-shadow 0s, transform 0.5s, margin-left 0.5s ;
                    /* transition-delay: 1s; */
                    &:hover{
                        transition: box-shadow 0s, transform 1.5s, margin-left 1s ;
                        transform: scale(1.5);
                        position: absolute;
                        margin: 0 auto;
                        margin-left: 40%;
                        z-index: 4;
                        box-shadow: 0px 0px 1px 700px rgb(0,0,0, 70%), 1px 1px 10px 3px rgb(255, 255, 255, 60%);         
                    }
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
                    z-index: 3;
                    background: transparent;
                }
            }
            #BtnPrev{
                left: -15px;
                svg{transform: rotate(180deg); }
            }
            #BtnNext{ right: -15px; }
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
                background: transparent;
                /* width: 30%; */
                padding: 10px 25px;
                border: 1px solid var(--secundary-color);
                border-radius: 5px;
                color: var(--text-primary-color);
                margin-right: 15px;
                cursor: pointer;
                }
            }
        }
    }
    #soon{
        margin-top: 75px;
        text-align: center;
        }
`;
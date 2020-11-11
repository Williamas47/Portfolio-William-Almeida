import styled from "styled-components";
import adressMapIMG from "../../../img/AdressMap.png";

export const StyledContact = styled.section`
    height: 100vh;
    color: var(--text-primary-color);
    padding-top: 15px;
    position: relative;
    h2{
        font-size: 2.5em;
        span{ color: var(--secundary-color)};
        margin-bottom: 25px;
    }
    #contactContent{
        display: flex;
        align-items: center;
        height: 80%;
        /* width: 95%; */
        justify-content: space-between;
        margin: 0 auto;
        /* border: 1px solid red; */
        position: relative;
        #contactLeft{
            width: 60%;
            height: 100%;
            form{
                display: flex;
                /* gap: 40px; */
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: space-between;
                max-width: 100%;
                height: 100%;

                /* padding-right: 150px; */
                
                padding-right: 50px;
                padding-left: 10%;

                /* padding: 0 50px; */
                padding-top: 10px;
                position: relative;
                label{
                    font-size: 1.2em;
                    width: 100%;
                    margin-bottom: 10px;
                    p{
                        padding-bottom: 10px;
                    }

                    input, textarea{
                        width: 90%;
                        width: 100%;
                        background: white;
                        border: 1px solid var(--text-secundary-color);
                        border-radius: 5px;
                        padding: 10px;
                        box-sizing: border-box;
                    }
                    textarea{
                        min-width: 50%;
                        /* max-width: 583px; */
                        max-width: 100%;
                        height: 125px;
                        max-height: 125px;
                    }
                }
                button{
                    width: 15%;
                    margin: 0 auto;
                    /* margin-left: calc(92.5% - 7.5%); */
                    background: transparent;
                    border: 1px solid var(--secundary-color);
                    color: var(--text-primary-color);
                    padding: 10px 15px;
                    font-size: 1em;
                    border-radius: 5px;
                }
            }
        }
        #contactRight{
            /* width: 35%; */
            width: 40%;
            height: 100%;
            position: relative;
            #map{
                height: 100%;
                /* Maybe */
                    width: 90%;
                    margin-left: 10%;
                /*  */
                background: transparent;

                /* padding: 10px; */
                background-image: url(${adressMapIMG});
                border-radius: 15px 0 0 15px ;
                background-position-y: -50px;
                background-repeat: no-repeat;
                background-size: 100%;
                #contactInfos{
                    line-height: 35px;
                    z-index: 3;
                    width: 200px;
                    background: transparent;
                    padding-top: 15px;
                    margin-left: 15px;
                    /* padding-left: 15px; */
                    /* padding: 15px 0 0 15px; */
                    /* margin: 15px 0 0 15px; */
                    /* margin-top: 20px; */
                    /* padding: 15px; */
                    /* background: rgb(0,0,0, 50%); */
                    p{
                        padding: 10px;
                        background: rgb(0,0,0, 80%);
                    }
                }
            }
        }
    }
`;
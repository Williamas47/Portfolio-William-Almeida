import styled from "styled-components";

export const StyledAside = styled.aside`
    /* border: 2px solid green; */
    width: 5%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    /* justify-content: center; */
    /* color: var(--text-primary-color); */
    position:fixed;
    left: 0;
    #asideTop{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
        /* gap: 15px; */
        #LogoWas{
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
        }
        label{
            color: #8B8B8B;
            cursor: pointer;
            font-weight: bold;
            /* font-size: 18px; */
        }
        input[type=radio]{
            display:none;
            &:checked + label{  
                cursor: default;
                color: var(--text-primary-color);
            }
        }
    }
    #asideTop:after{
        content: '';
        width: 3px;
        margin-top: 100px;
        height: 48%;
        background: var(--secundary-color);
        position: absolute;
    }
    #asideBottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
        svg{
            cursor: pointer;
            width: 30px;
            height: 30px;
            transition: 0.5s ease;
            &:hover{
                transform: scale(1.1);
                transition: 0.5s ease;
            }
        }
    }
`;
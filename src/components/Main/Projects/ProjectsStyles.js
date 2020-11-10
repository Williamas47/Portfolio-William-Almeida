import styled from 'styled-components';

export const StyledProjects = styled.div`
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
        flex: 0 50%;
        gap: 29px;
        .showPhotos{
            background: #151E3C;
            padding: 15px;
            border-radius: 5px;
            position: relative;
            button{
                position: absolute;
                top: 50%;
                background: transparent;
                border: 0px;
                padding: 5px;
                color: var(--text-primary-color);
                cursor: pointer;
            }
            img{
                width: 475px;
                height: 275px;
                /* box-shadow: 1px 1px 5px lightgrey; */
                /* size: 50%; */
            }
        }
        .showPhotos:after{
            content: "";
            position: absolute;
            width: 1px;
            height: 90%;
            background: var(--secundary-color);
            right: -25px;
        }
        .projectInfo{
                padding-left: 30px;
            h3{
                font-size: 1.8em;
            }
            p{
                padding: 25px 0;
                width: 75%;
            }
            .projectTags{
                padding-bottom: 25px;
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            button{
                background: transparent;
                padding: 10px 25px;
                border: 1px solid var(--secundary-color);
                border-radius: 5px;
                color: var(--text-primary-color);
                margin-right: 15px;
                cursor: pointer;
            }

        }
    }
    #soon{
        margin-top: 100px;
        text-align: center;
        }
`;
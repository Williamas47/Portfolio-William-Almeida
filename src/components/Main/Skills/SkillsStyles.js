import styled from 'styled-components';

export const StyledSkills = styled.div`
    height: 100vh;
    /* margin-top: 75px; */
    padding-top: 25px;
    color: var(--text-primary-color);

    h2{
        font-size: 2.5em;
        margin-bottom: 50px;
        span{ color: var(--secundary-color)};
    }
    #skillsContent{
        display: flex;
        flex-direction: column;
        gap: 25px;
        h3{
            font-size: 1.8em;
            padding-left: 30px;
        }
        .skillItems{
            margin: 25px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            h4{ color: var(--text-secundary-color); }
            .skillSection{
                /* border: 1px solid red; */
                span{
                    margin-right: 10px;
                    padding: 5px 10px;
                    border-radius: 5px;
                }               
            }
            .skills{
                display: flex;
                flex-wrap: wrap;
                span{  margin-top: 10px; }
            }
            .advKnlg{ width:33%; }
            .medKnlg{ max-width: 25%; min-width: 25%; }
            .basKnlg{ width: 18%; }
            
            .advKnlg span{ background: #1A2265; }
            .medKnlg span{ background: #1A6560; }
            .basKnlg span{ background: #79953D; }
            .learning span{ background: #651A1A; margin-right:25px; }

        }
        #webDev{
            .skillItems.skillSection{
            }
        }
        #webDes{
            .skillItems.skillSection{
            }
        }
    }
`; 
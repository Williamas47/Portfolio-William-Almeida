import styled from "styled-components";

export const StyledNav = styled.nav`
    /* border: 2px solid green; */
    width: 5%;
    height: 100vh;
    position:fixed;
    right: 0;
    /* margin-right: 5px; */
    flex-direction: column;
    display: flex;
    /* justify-content: center; */
    align-items: flex-end;
    justify-content: space-around;
    a{
        color: var(--text-secundary-color);
        text-decoration: none;
    }
    p{
        margin-right: 10px;
    }
    p#activeSection{
        color: var(--text-primary-color);
    }
`;
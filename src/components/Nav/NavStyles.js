import styled from "styled-components";

export const StyledNav = styled.nav`
    /* border: 2px solid green; */
    /* width: 5%; */
    height: 80vh;
    margin: 10vh 0;
    /* padding-top: 2.5%; */
    /* padding-bottom: 2.5%; */
    /* background: red; */
    /* background: blue; */
    /* overflow: hidden; */
    margin-right: 5px;
    position:fixed;
    right: 0;
    /* margin-right: 5px; */
    /* flex-direction: column; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* align-items: flex-end; */
    /* justify-content: space-around; */

    #progressBar{
      /* background: blue; */
       /* height: 100vh; */
       
       /* border-radius: 0 0 5px 5px; */
       border-radius: 5px;
       min-height: 20px;
        content: "";
         width: 10px;
          position: absolute;
          top: 0;
          right: 0;
          background: var(--secundary-color);
    }
    #navLinks{
        /* background: red; */
        margin-right: 10px;
        /* padding: 10% 0; */
        height: 80vh;
        /* margin: 0 auto; */
        flex-direction: column;
        display: flex;
        align-items: flex-end;
        /* justify-content: space-around; */
        justify-content: space-between;
    }

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
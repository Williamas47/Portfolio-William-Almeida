import styled from "styled-components";

export const StyledMain = styled.div`
/* overflow-y: scroll; */
    /* width */
    ::-webkit-scrollbar {
    width: 50px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #151E3C;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #13AA52;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;
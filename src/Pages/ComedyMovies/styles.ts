import styled from "styled-components";

export const Container = styled.section`
    max-width: 100vw;
    padding: 1rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media (max-width: 768px) {
        margin: 0;
}
`

export const Header = styled.header`
    color: #0c0a09;
    height: 3rem;
    width: 100%;
`
import styled from "styled-components";

export const Container = styled.aside`
    width: 4rem;
    padding: 1rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #E4E4E7;
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.19);

`

export const Navigate = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3rem;

  

    .IconsNavigate {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.5rem;
        border: none;
        border-radius: 8px;
    }

    .IconsNavigate:hover {
       background-color: #0284C7;
    }
`

export const Content = styled.main`
    width: 100%;
    height: 100%;

    background-color: red;
` 
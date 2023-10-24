import styled from "styled-components";

interface IButton {
    backgroundColor?: string;
}


export const Container = styled.section`
    max-width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    h2 {
        color: #0284C7;
    }

    @media (max-width: 768px) {
}

footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;
    }
`

export const Header = styled.header`
    color: #0c0a09;
    height: 3rem;
    width: 100%;
`



export const HeaderMovies = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .Filter {
        width: 100%;
        display: flex;
        justify-content: space-between;

    }

    .infMovies {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    @media (max-width: 768px) {
     .actions {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
     }
        .Filter {
            width: 100%;

        }
    }
    

`

export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        margin: 0;
        
    }
    
    
`


export const Card = styled.div`
    flex-grow: 1;
    flex-basis: 200;
    cursor: pointer;
    border: 1px solid #0284C7;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    max-height: 30rem;
    border-radius: 0.2rem;

    padding: 0.5rem;
    
    .ImageCard {
        width: 100%;
        height: 70%;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            max-width: 90%;
            border-radius: 5px 5px  0 0;

            @media (max-width: 768px) {
                width: 90%;
                height: 100%;
    }
        }
    }

    .infCard {
        height: 30%;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        display: flex;
        max-height: 80rem;
        padding: 0.5rem;

        width: 90%;
    }
`

export const Button = styled.button<IButton>`
    padding: 0.5rem;
    border-radius: 0.5rem;

    border: none;
    background-color: ${(props) => props.backgroundColor};

    transition: opacity 0.2s; 
    cursor: pointer;

    color: #fafafa;
    font-weight: 600;

    &:hover {
        opacity: 0.8; 
    }

    @media (max-width: 768px) {
        width: 100%;
    }
    
`

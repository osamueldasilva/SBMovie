import styled from "styled-components";

export const HeaderMyFavorites = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

export const ContainerCards = styled.div`
  
    width: 100%;
    height: 100%;

     display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

export const Card = styled.div`
    cursor: pointer;
    border: 1px solid #0284C7;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    height: 25rem;
    border-radius: 0.2rem;
    
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
        width: 16rem;
    }
`

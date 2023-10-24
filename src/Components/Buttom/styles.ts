import styled from 'styled-components';

interface ButtonProps {
    width: number;
    backgroundColor: string;
}

export const Buttom = styled.button<ButtonProps>`
    width: ${(props) => props.width}rem ;
    padding: 0.8rem 0;

    background-color: ${(props) => props.backgroundColor};
    color: #fafafa;

    font-size: 16px;
    font-weight: 600;

    cursor: pointer;
    border: none;
    border-radius: 8px;

    transition: opacity 0.2s; 

    &:hover {
        opacity: 0.8; 
    }
    

    @media (max-width: 768px) {
        width: 80%;
    }
`
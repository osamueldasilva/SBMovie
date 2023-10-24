import styled from 'styled-components'

export const InputsComponent = styled.input`
    width: ${(props) => props.width}rem ;
    padding: 0.8rem 0.2rem;

    border-radius: 0.5rem;
    border: 1px solid #0284C7;
    outline: none;

    color: #0284C7;

    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.875rem;
        width: 100%;
    }


    
`
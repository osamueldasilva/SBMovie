import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    min-height: 200px;

    .loader {
    &__text {
        margin: 5px auto;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #0284C7;
    }
    &__filmstrip {
        position: relative;
        width: 56px;
        height: 70px;
        background: #0284C7;
        z-index: -1;
        &:before, &:after {
            content: '';
            position: absolute;
            height: 120%;
            border-left: 5px dashed #0284C7;
            animation: roll 20ms infinite;
        }
        &:before {left: 5px;}
        &:after {right: 5px;}
        
    }
}

@keyframes roll {
    0% {top: 0px;}
    100% {top: -15px;}
}
`
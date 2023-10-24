import styled from "styled-components";

export const Content = styled.section`
    
`

export const ContainerImage = styled.main`
    .greetings {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        color: #fafafa;

        p {
            font-size: 1.2rem;
            font-weight: 600;
            width: 30rem;
            text-align: center;
        }
    }

    @keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #0284C7;
    overflow: hidden;
    
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 50s linear infinite;
}




.background li:nth-child(0) {
    left: 65%;
    width: 209px;
    height: 209px;
    bottom: -209px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 15%;
    width: 142px;
    height: 142px;
    bottom: -142px;
    animation-delay: 2s;
}
.background li:nth-child(2) {
    left: 32%;
    width: 224px;
    height: 224px;
    bottom: -224px;
    animation-delay: 5s;
}
.background li:nth-child(3) {
    left: 31%;
    width: 148px;
    height: 148px;
    bottom: -148px;
    animation-delay: 8s;
}
.background li:nth-child(4) {
    left: 23%;
    width: 160px;
    height: 160px;
    bottom: -160px;
    animation-delay: 12s;
}
.background li:nth-child(5) {
    left: 20%;
    width: 118px;
    height: 118px;
    bottom: -118px;
    animation-delay: 7s;
}
.background li:nth-child(6) {
    left: 6%;
    width: 213px;
    height: 213px;
    bottom: -213px;
    animation-delay: 3s;
}
.background li:nth-child(7) {
    left: 35%;
    width: 157px;
    height: 157px;
    bottom: -157px;
    animation-delay: 9s;
}
.background li:nth-child(8) {
    left: 9%;
    width: 101px;
    height: 101px;
    bottom: -101px;
    animation-delay: 20s;
}
.background li:nth-child(9) {
    left: 69%;
    width: 147px;
    height: 147px;
    bottom: -147px;
    animation-delay: 22s;
}
.background li:nth-child(10) {
    left: 65%;
    width: 119px;
    height: 119px;
    bottom: -119px;
    animation-delay: 32s;
}
.background li:nth-child(11) {
    left: 58%;
    width: 138px;
    height: 138px;
    bottom: -138px;
    animation-delay: 36s;
}
.background li:nth-child(12) {
    left: 1%;
    width: 121px;
    height: 121px;
    bottom: -121px;
    animation-delay: 23s;
}

`
export const ContainerLogin = styled.main`
    width: 50%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1.5rem;

    h1, h3 {
        color: #0284C7;
    }

    h3 {
        cursor: pointer;
    }


    .recovery {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 25rem;

        font-size: 0.875rem;

        span {
            cursor: pointer;
            color: #0284C7;
        }
    }

    .Checked {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            cursor: default;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
}
`

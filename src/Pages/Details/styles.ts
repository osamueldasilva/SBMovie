import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
  overflow: hidden;
  cursor: default;

  padding: 1rem;
`;

export const ModalDetails = styled.main`
  width: 50rem;
  max-height: 30rem;
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .closeModal {
    height: 1.5rem;
    cursor: pointer;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .informations {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 20rem;
      border-radius: 5px;
    }

    .details {
      padding: 1rem;
      max-height: 20rem;
      display: flex;
      flex-direction: column;

      p {
        font-weight: 500;
      }

      ul {
        display: flex;
        padding: 0;
        gap: 2rem;
      }

      li {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 18rem;
    max-height: 32rem;
    font-size: 14px;
    
    overflow-y: auto;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .informations {
      display: grid;
      place-items: center;

    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

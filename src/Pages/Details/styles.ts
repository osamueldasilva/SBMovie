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
`

export const modalDetails = styled.main`
    width: 50rem;
    height: 25rem;
   
  background-color: #fafafa;
  padding: 1.5rem;
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

    gap: 1rem;

    img {
      height: 20rem;
      border-radius: 5px;
    }

    .details {
      height: 20rem;

      display: flex;
      flex-direction: column;

      p {
        font-weight: 500;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      li {
        list-style-type: none;

        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
    }
  }

  `

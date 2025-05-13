import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(100px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
      }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #f0f4ff;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    margin: 10px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Poppins', sans-serif;
  background-color: #f0f4ff;
  transition:  0.3s ease;
    animation: ${fadeIn} 0.5s ease-in-out;

  h1 {
    font-size: 2.5rem;
    color: #131e5b;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #3a3437;
    margin-bottom: 20px;
  }
`;
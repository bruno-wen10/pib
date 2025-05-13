import styled, { keyframes } from "styled-components";

const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



export const ContentWrapper = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
`;

export const TitleSection = styled.div`
  flex: 1;
  animation: ${slideInLeft} 0.8s ease-out;

  h1 {
    font-size: 5rem;
    color: #131e5b;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    
    margin-bottom: 0rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      text-align: center;
      padding-top: 2rem;
    }
  }
  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: #131e5b;
    margin-bottom: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  min-height: 150px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-top: 2rem;
  }

  img {
    transition: 0.3s ease;
    animation: ${fadeInBottom} 0.8s ease forwards;
    position: absolute;
    opacity: 0;
  }

  .maior {
    width: 70%;
    height: auto;
    z-index: 1;
    animation-delay: 0.2s;
    top: 8%;
    left: 5%;

    @media (max-width: 768px) {
      width: 80%;
      top: 10%;
      left: 11%;
    }
  }

  .menor {
    width: 40%;
    height: auto;
    z-index: 2;

    @media (max-width: 768px) {
      width: 45%;

    }
  }

  .menor1 {
    top: -15%;
    left: -10%;
    animation-delay: 0.6s;

    @media (max-width: 768px) {      
      left: 5%;
    }
  }

  .menor2 {
    top: 140%;
    right: 10%;
    animation-delay: 0.9s;

    @media (max-width: 768px) {
      top: 90%;
        right: 2%;
    }
  }
`;


export const TextSection = styled.div`
  padding-top: 1rem;
  animation: ${fadeInBottom} 1s ease forwards;
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  background-color: #f0f4ff;
  margin-top: 10rem;
  

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #3a3437;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
      text-align: justify;
    }
  }
`;

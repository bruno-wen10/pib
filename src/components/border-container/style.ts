import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BorderContainerDiv = styled.div<{ direction: string; colorFonte?: string; height?: string; colorSpan?: string; colorP?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  background-color: ${({ color }) => (color ? color : "none")};
  border: 1px solid #131e5b;
  font-family: 'Poppins', sans-serif;
  color: #CEDAEC;
  font-weight: bold;
  width: 100%;
  height: ${({ height }) => height? height : "50vh"};
  margin-bottom: 15px;
  gap: 30px;
  transition: border-color 0.3s, transform 0.3s, background-color 0.3s, color 0.3s;
  animation: ${fadeIn} 0.5s ease-in-out;
 span, strong {
      color: ${({ colorSpan }) => (colorSpan ? colorSpan : "#131e5b  ")}; /* Cor do texto */
      font-weight: bold;
      

    }
  
  &:hover {
    background-color: #ECEFF4; /* Cor branco gelo */
    border-color: #e3b505;
    box-shadow: 0 4px 6px #e3b505;
    transform: scale(1.04);

    h1, h2, h3, h4, h5, h6 {
      color: #131e5b; /* Cor do título */
      
    }

    p {
      color: ${({ colorP }) => (colorP ? colorP : "#3A3437 ")}; /* Cor do texto */
      font-weight: bold;
      

    }

    span, strong {
      color: ${({ colorSpan }) => (colorSpan ? colorSpan : "#131e5b  ")}; /* Cor do texto */
      font-weight: bold;
      

    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;
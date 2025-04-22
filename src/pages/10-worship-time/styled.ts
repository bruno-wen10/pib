
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 from{
    opacity: 0;
    transform: translateY(100px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
      }
`
export const BorderContainerStyled = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({direction})=> direction ? direction : "row"};
  justify-content: center;  
  align-items: center;
  gap: 20px;
  padding: 20px;  
  font-family: 'Poppins', sans-serif;
  color: #fff;
  
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

export const BorderContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;     
      width: 100%;
      height: 50vh;
     align-items: center;
      border: 1px solid #131E5B;
     color: "#FFFFFF"
     transition: border-color 0.3s, transform 0.3s;
      animation: ${fadeIn} 0.5s ease-in-out;

     &:hover {
    border-color: #81C6E8;
    transform: scale(1.03);
    background-color: #ECEFF4 ;
    
    h2 {
        color: #131E5B;
    }
    p {
            color: #3A3437  ;
    }
    strong{
                color: #3A3437  ;
                font-size: 20px;
     }
  }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
     }
`
 export const ContainerButton = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

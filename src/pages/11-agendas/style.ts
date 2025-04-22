import styled, { keyframes } from 'styled-components';

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

export const AgendaWeekStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    width: 100%;
    height: 50vh;    
    border: 1px solid #131E5B;
    transition: border-color 0.3s, transform 0.3s;
    animation: ${fadeIn} 0.5s ease-in-out;
  
    

    &:hover {
    border-color: #81C6E8;
    transform: scale(1.02);
    background-color: #ECEFF4 ;
    
    h2, h1, h4 {
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
        max-width: 100%;
        flex-direction: column;
    }
    @media (max-width: 480px) {
        max-width: 100%;
        flex-direction: column;
    }
    @media (max-width: 320px) {
        max-width: 100%;
        flex-direction: column;
    }
`



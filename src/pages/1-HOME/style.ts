import styled from "styled-components";



export const H1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin: 20px 0;
`;
export const AcontecePib = styled.h1`
    color: #3A3437;
    font-size: 2.5rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
     margin-bottom: 30px;
      @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const BackgroundColorDiv = styled.div`
    background-color: #ECEFF4 ;    
    font-family: 'Poppins', sans-serif;
    padding-left: 20px;  
    display: flex;
    gap: 50px;
    height: 60vh;
    

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    
      }
       
`
export const EventContener = styled.div`    
     font-family: 'Poppins', sans-serif;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     margin: 35px 0;    
      transition: transform 0.8s ease-in-out;

     & hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
        color: #131E5B;
      }
 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
       
`
export const AssistaAoVivo = styled.h1`
    color: #131E5B ;
    font-size: 3rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin: 20px 0;
`;



import { styled } from "styled-components";


export const  ContainerEvent = styled.div`
  display: flex;  

  width: 100wh;
  height: 85vh; /* Ocupa toda a altura da tela */
  background-color: #ECEFF4;
`;

export const ContainerIformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%; /* Ocupa toda a largura da tela */
  height: 100%; /* Ocupa toda a altura da tela */
  background-color: #ECEFF4;
`;

export const TitleEvent = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;  
  color: #131E5B     ;
  
`;
export const DateEvent = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  
  color: #3A3437     ;
`;
export const DescriptionEvent = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;  
  color: #3A3437   ;
  margin-top: 10px;
`;
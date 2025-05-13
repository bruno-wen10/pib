import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const unfold = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const DropdownContainer = styled.div`  
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  top: 100%;
  left: 58%;
  width: 50%;
  background: linear-gradient(90deg,  #4465FF, #B2C9E4);
  animation: ${unfold} 0.3s ease-out;
  transform-origin: top;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    left: 0; /* Move para o lado esquerdo em dispositivos móveis */
    width: 100%; /* Ocupa toda a largura */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`;

const Option = styled(Link)`
  margin: 0 1rem;  
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #131E5B;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #4465FF;
    transform: scale(1.1)
    
  }

  @media (max-width: 768px) {
    margin: 0.5rem 1rem; /* Ajusta o espaçamento para dispositivos móveis */
    font-size: 0.9rem; /* Reduz o tamanho da fonte */
  }
`;

export { DropdownContainer, Option };

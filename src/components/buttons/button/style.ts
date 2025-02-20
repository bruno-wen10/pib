import styled from "styled-components";

export const ButtonGeneral = styled.button`
    background-color: #131E5B  ;
    color: #ECEFF4 ;
    font-size: 12px;
    font-weight: 790; /* Aumenta a espessura da fonte */
    padding: 10px 20px;
    border: 5px solid #131E5B;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em; /* Adiciona um leve espaçamento entre as letras */
    transition: background-color 0.3s ease, color 0.3s ease;
    outline: none; /* Remove o contorno */

    &:hover {
        background-color: #E3B505 ; /* Muda a cor de fundo para azul ao passar o mouse */
        color: #131E5B ; /* Muda a cor do texto para branco ao passar o mouse */
        border: 5px solid  #E3B505 ;
    }

    &:focus {
        outline: none; /* Remove o contorno ao focar */
    }

    @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
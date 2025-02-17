//import { keyframes } from "styled-components";
import styled from "styled-components";


interface CardEventProps {
    slideIn: boolean;
}




export const Container = styled.div`   
    display: flex;
    justify-content: center;
    
    
    
    flex-wrap: nowrap; /* Não permite quebra de linha */
    
     @media (max-width: 768px) {
         flex-wrap: wrap; /* Permite quebra de linha */
     }
`;

export const CardEvent = styled.div<CardEventProps>`             
    background-color: #ECEFF4;
    height: 30px;
    margin: 10px;
    flex: 0 0 30%; 
    display: flex;
    flex-direction: column;
    
     transition: 3s; 
    @media (max-width: 768px) {
        height: auto;
        margin: 10px 0;
       flex: 0 0 70%; 
       
    }
`;

export const ImageEvent = styled.img`
   height: 200px;
    
`;

export const TitleEvent = styled.h3`
    color: #000;
    font-size: 1.5rem;     
    font-family: 'Poppins', sans-serif;    
`;

export const TextEvent = styled.p`
    color: #3A3437;
    font-size: 1.1rem;     
    font-family: 'Poppins', sans-serif;    
`;

export const NavigationButton = styled.button`
    background-color: #131E5B;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 100px;
    padding: 10px 20px;
    
    height: 40px;

    &:hover {
        background-color: #E3B505;
        
    }

    @media (max-width: 768px) {
        padding: 5px 10px;
        height: 30px;
    }
`;
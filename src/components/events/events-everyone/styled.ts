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

export const Container = styled.div<{ reverse?: boolean }>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: center;
    border: 1px solid #131E5B;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    width: 100%;
    height: 50vh;
    margin-bottom: 15px;
    gap: 30px;
    transition: border-color 0.3s, transform 0.3s;
    animation: ${fadeIn} 0.5s ease-in-out;

    &:hover {
        border-color: #81C6E8;
        
        transform: scale(1.03);
        background-color: #ECEFF4 ;
        
        h2 {
            color: #131E5B;
        }
        p, strong {
                color: #3A3437  ;
            }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`;

export const ImagemEvent = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;

export const LoadMoreButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #131E5B;
    border: 5px solid  #131E5B;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color:  #81C6E8;
        color: #131E5B;
        border: 5px solid  #81C6E8;
    }
`;

export const TitleEvent = styled.h1`
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 50;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;
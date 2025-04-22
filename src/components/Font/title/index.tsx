import styled, { keyframes } from "styled-components";

interface TitleProps{
    children: string
    color?: string
    fonteSize?: string
}

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
export const TitleH1 = styled.h1<{ color?: string; fonteSize?: string }>`
    color: ${({ color }) => color? color: '#CEDAEC'};
    font-size: ${({fonteSize}) => fonteSize? fonteSize: '3rem'};
    font-weight: 100;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    animation: ${fadeIn} 1s ease-in-out;

    

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export default function TitlePages({children, color, fonteSize}:TitleProps) {
    return(
        <TitleH1 color={color} fonteSize={fonteSize}>{children}</TitleH1>
    )
}
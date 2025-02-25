import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
   from {
    opacity:0;
    transform: translateY(200%);
  }
  to {
    opacity: 10;
    transform: translateY();
  }
`;

export const ButtonContainer = styled.div<{ isVisible: boolean }>`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    animation: ${({ isVisible }) => (isVisible ? slideUp : 'none')} 1s ease-in-out;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CultDay = styled.h5`
  background: linear-gradient(90deg, #47B5E4, #4465FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Cult = styled.h3`
  color: #131E5B;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CultItem = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${slideUp} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;
  margin: 30px;
  flex: 1;

  @media (max-width: 768px) {
    margin: 15px;
  }
`;


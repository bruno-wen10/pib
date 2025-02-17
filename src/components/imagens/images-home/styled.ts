import styled from 'styled-components';



export const Container = styled.div`
   position: relative;
   width: calc(100vh -); // Ajuste a largura do Container se necessário
  height: calc(100vh -70px); // Ajuste a altura do header se necessário
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Adicione esta linha para garantir que o Container fique abaixo do Nav */
`;

export const Image = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
`;

export const Arrow = styled.div<{ direction: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    ${({ direction }) => direction}: 10px;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
`;
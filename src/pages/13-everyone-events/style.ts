import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Coloca o background atrás dos outros elementos */
  overflow: hidden;
`;

export const BackgroundVideo = styled.video<{ filterBlue: string  }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(${({ filterBlue }) => filterBlue});
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Garante que o conteúdo fique acima do background */
  padding: 20px;
  color: #000; /* Ajuste a cor do texto conforme necessário */
  padding: 30px;
`;
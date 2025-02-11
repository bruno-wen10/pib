import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  /* Configuração padrão para responsividade */
  html {
    font-size: 16px; /* Base para usar rem */
    scroll-behavior: smooth;

    @media (max-width: 768px) {
      font-size: 14px; /* Reduz o tamanho da fonte em telas menores */
    }

    @media (max-width: 480px) {
      font-size: 12px; /* Ainda menor em telas muito pequenas */
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    line-height: 1.6;
    background-color: #f8f9fa; /* Cor de fundo neutra */
   
  }

  /* Layout flexível */
 

  /* Estilização básica de links */
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Imagens responsivas */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Botões padrão */
  button {
   
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Classe utilitária para containers */
  .container {
    width: 100%;
    max-width: 1200px; /* Largura máxima em telas grandes */
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0 0.5rem; /* Reduz margens em telas menores */
    }
  }
`;

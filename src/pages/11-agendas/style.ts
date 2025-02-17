import styled from "styled-components";


export const PageContainer = styled.div`
  position: relative;
  
`;

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
`;
export const TableContainer = styled.div`
  position: relative;
  margin-top: -250px; /* Ajuste conforme necessário para sobrepor o header */
   z-index: 2; /* Certifique-se de que o z-index seja maior que o HeaderContainer */
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 100%;
  

`;

export const TableBackground = styled.div`
  background-color: #131E5B ;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.500);
  margin: 100px; 
  width: 100%;
  
`;
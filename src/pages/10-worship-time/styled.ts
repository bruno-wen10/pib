
import styled from "styled-components";


export const BorderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;  
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
  }
`;


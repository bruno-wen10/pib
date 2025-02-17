import { Link } from "react-router-dom";
import styled from "styled-components";



export const BaseLayoutContainer =  styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.6rem 3rem;
 background: linear-gradient(90deg, #B2C9E4, #4465FF);
color: #292B2C ;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
@media (max-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
}
`;

export const Logo = styled.img`
  height: 70px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 40px;
  }
`;
export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  margin-right: 1rem; 

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    flex-direction: column;
    gap: 1rem;
     background: linear-gradient(90deg, #B2C9E4, #4465FF);
    padding: 1rem;
    
    box-shadow: 0 4px 6px rgb(0, 0, 0);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    z-index: 1000; /* Adicione esta linha para garantir que o Nav fique acima dos outros elementos */
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #131E5B ;
  font-size: 1.0rem;  
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  &:hover {
    color:rgb(0, 0, 0);
    text-decoration: none;
    }
    `;
    export const MenuIcon = styled.div`
    display: none;
    font-size: 1.5rem;
  cursor: pointer;
  

  @media (max-width: 768px) {
    display: block;
  }
`;
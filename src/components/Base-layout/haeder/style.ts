import { Link } from "react-router-dom";
import styled from "styled-components";



export const BaseLayoutContainer =  styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.6rem 3rem;
background-color: #B2C9E4 ;
color: #292B2C ;

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

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    background: #C9D7EB;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
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
    color: #292B2C;
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
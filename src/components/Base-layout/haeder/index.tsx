// import Styled Components
import { BaseLayoutContainer, Logo, Nav, StyledLink, MenuIcon  } from "./style";
//import images
import logo from "../../../assets/img/Logotipo PIB.png";
// import hooks
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hearder() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
  return (
    <BaseLayoutContainer>
      
      <Link to={"/home"}>
      <Logo src={logo} alt="Logo da Igreja" />
      </Link>

      <MenuIcon onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </MenuIcon>

      <Nav isOpen={menuOpen}>
        <StyledLink  to={"/home"} >Home</StyledLink >
        <StyledLink  to={"/PIB"} >PIB</StyledLink >
        <StyledLink  to={"/ministerios"}>Ministérios</StyledLink >
        <StyledLink  to={"/mensagens"}>Contribua</StyledLink >        
        <StyledLink  to={"/mensagens"}>membros</StyledLink >

        

      </Nav>
    </BaseLayoutContainer>
  );
}

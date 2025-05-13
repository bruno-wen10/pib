// import Styled Components
import {
  BaseLayoutContainer,
  Logo,
  Nav,
  StyledLink,
  StyledDiv,
  MenuIcon,
  Wrapper,
  Styledlink2,
} from "./style";
// import images
import logo from "../../../assets/img/Logotipo PIB.png";
// import hooks
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../drop-down-manu/index";

export default function Hearder() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(item);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
      setHoveredItem(null);
    }, 200);
  };

  const menuOptions: Record<string, { label: string; to: string }[]> = {
    PIB: [
      { label: "Quem Somos", to: "/pib/quem-somos" },
      { label: "O Que Cremos", to: "/pib/o-que-cremos" }, 
      { label: "Missão, Visão e Valores", to: "/pib/missao-visao-valores" },     
      { label: "Nossos Eventos", to: "/todos-os-eventos" },
    ],
    Ministérios: [
      { label: "Louvor", to: "/ministerios/louvor" },
      { label: "Kids", to: "/ministerios/kids" },
      { label: "Jovens", to: "/ministerios/jovens" },
      { label: "Mulheres", to: "/ministerios/mulheres" },
      { label: "Viva+", to: "/ministerios/viva+" },
      { label: "Casais", to: "/ministerios/casais" },
      { label: "Grupo de Oração", to: "/ministerios/oracao" },
      
      

    ],
  };

  return (
    <Wrapper>
      <BaseLayoutContainer>
        <Link to={"/"}>
          <Logo src={logo} alt="Logo da Igreja" />
        </Link>

        <MenuIcon onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </MenuIcon>

        <Nav isOpen={menuOpen}>
        <StyledDiv
            onMouseEnter={() => handleMouseEnter("")}
            onMouseLeave={handleMouseLeave}
          >
            <StyledLink to={"/"}>Home</StyledLink>
          </StyledDiv>
          <StyledDiv
            onMouseEnter={() => handleMouseEnter("PIB")}
            onMouseLeave={handleMouseLeave}
          >
            <Styledlink2 >PIB</Styledlink2>
          </StyledDiv>

          <StyledDiv
            onMouseEnter={() => handleMouseEnter("Ministérios")}
            onMouseLeave={handleMouseLeave}
          >
            <Styledlink2 >Ministérios</Styledlink2>
          </StyledDiv>

          <StyledDiv onMouseEnter={() => handleMouseEnter("")} onMouseLeave={handleMouseLeave}>
            <StyledLink to={"/contribua"}>Contribua</StyledLink>
          </StyledDiv>

          <StyledDiv onMouseEnter={() => handleMouseEnter("")} onMouseLeave={handleMouseLeave}>
            <StyledLink to={"/membros"}>Membros</StyledLink>
          </StyledDiv>
        </Nav>
      </BaseLayoutContainer>

      {showDropdown && hoveredItem && (
        <DropdownMenu
          options={menuOptions[hoveredItem]}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Wrapper>
  );
}

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Estilos para la barra de navegación
const NavbarContainer = styled.nav`
  background-color: #2c3e50;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #1abc9c;
    color: #fff;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/users" className={location.pathname === "/users" ? "active" : ""}>
            Usuarios
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/roles" className={location.pathname === "/roles" ? "active" : ""}>
            Roles
          </StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;

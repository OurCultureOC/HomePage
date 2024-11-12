import styled from "styled-components";
import NurimLogo from "../assets/firstpage/Logo.png";
import { useState } from "react";

const Header = () => {
  const [isToggleMenu, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!isToggleMenu);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={NurimLogo} alt="Nurim Logo" />
        <Menu>
          <MenuItem>누림이란?</MenuItem>
          <MenuItem>앞으로의 누림</MenuItem>
          <MenuItem>이용약관</MenuItem>
        </Menu>
        <MobileMenu onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MobileMenu>
      </HeaderContent>
      <MobileSidebar isOpen={isToggleMenu}>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <MobileMenuItem>누림이란?</MobileMenuItem>
        <MobileMenuItem>앞으로의 누림</MobileMenuItem>
        <MobileMenuItem>이용약관</MobileMenuItem>
      </MobileSidebar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
  margin: 0 auto;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Menu = styled.div`
  display: flex;
  gap: 30px;
  color: black;
  @media (max-width: 875px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 875px) {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  border: 2px solid black;
  border-radius: 5px;
  width: 35px;
  height: 25px;
`;
const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  border-radius: 5px;
`;

const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 50%;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
  z-index: 9999;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 875px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  align-self: flex-start;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  color:black;
`;

const MobileMenuItem = styled.div`
  color: black;
  margin: 10px 0;
  cursor: pointer;
`;
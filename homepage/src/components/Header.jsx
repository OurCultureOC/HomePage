import styled from "styled-components";
import NurimLogo from "../assets/firstpage/Logo.png";
import { useState } from "react";

const Header = () => {
  const [isToggleMenu, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!isToggleMenu);
  };
  console.log(isToggleMenu)
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={NurimLogo} alt="Nurim Logo" />
        <Menu>
          <MenuItem>누림이란?</MenuItem>
          <MenuItem>앞으로의 누림</MenuItem>
          <MenuItem>이용약관</MenuItem>
        </Menu>
        <MobileMenuBar onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MobileMenuBar>
        <MobileMenuContainer $isOpen={isToggleMenu}>
            <MobileMenu>
                <MobileMenuItem>누림이란?</MobileMenuItem>
                <MobileMenuItem>앞으로의 누림</MobileMenuItem>
                <MobileMenuItem>이용약관</MobileMenuItem>
            </MobileMenu>
        </MobileMenuContainer>
      </HeaderContent>
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
  max-width: 50%;
  margin: 0 auto;
  /* border: 1px solid black; */

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
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

const MobileMenuBar = styled.div`
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

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  z-index: 9999;
  margin-top: 75px;
  width:47%;
  height: 10%;
  margin-right: 26.3%;
  @media (min-width: 875px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
`;
const MobileMenu = styled.div`
    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`

const MobileMenuItem = styled.div`
  color: black;
  margin: 2% 0;
  font-size: 1%;
  cursor: pointer;
`;
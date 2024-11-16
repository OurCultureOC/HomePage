import styled from "styled-components";
import NurimLogo from "../assets/firstpage/Logo.png";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isToggleMenu, setToggleMenu] = useState(false);
  const [isFirstModal, setFirstModal] = useState(false);
  const [isSecondModal, setSecondModal] = useState(false);
  const [isThirdModal, setThirdModal] = useState(false);

  const modal1 = useRef();
  const modal2 = useRef();
  const modal3 = useRef();

  const toggleMenu = () => {
    setToggleMenu(!isToggleMenu);
  };

  const openFirstModal = (e) => {
    e.stopPropagation();
    setFirstModal(true);
  };

  const openSecondModal = (e) => {
    e.stopPropagation();
    setSecondModal(true);
  };

  const openThirdModal = (e) => {
    e.stopPropagation();
    setThirdModal(true);
  };

  const handleClose = (e) => {
    if (
      (isFirstModal && modal1.current && !modal1.current.contains(e.target)) ||
      (isSecondModal && modal2.current && !modal2.current.contains(e.target)) ||
      (isThirdModal && modal3.current && !modal3.current.contains(e.target))
    ) {
      setFirstModal(false);
      setSecondModal(false);
      setThirdModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isFirstModal, isSecondModal, isThirdModal]);

  console.log("isToggleMenu =", isToggleMenu);
  console.log("isFirstModal =", isFirstModal);
  console.log("isSecondModal =", isSecondModal);
  console.log("isThirdModal =", isThirdModal);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={NurimLogo} alt="Nurim Logo" />
        <Menu>
          <MenuItem onClick={openFirstModal}>누림이란?</MenuItem>
          <MenuItem onClick={openSecondModal}>두 번째 모달</MenuItem>
          <MenuItem onClick={openThirdModal}>세 번째 모달</MenuItem>
        </Menu>
        <MobileMenuBar onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MobileMenuBar>
        <MobileMenuContainer $isOpen={isToggleMenu}>
          <MobileMenu>
            <MobileMenuItem onClick={openFirstModal}>누림이란?</MobileMenuItem>
            <MobileMenuItem onClick={openSecondModal}>
              두 번째 모달
            </MobileMenuItem>
            <MobileMenuItem onClick={openThirdModal}>
              세 번째 모달
            </MobileMenuItem>
          </MobileMenu>
        </MobileMenuContainer>
      </HeaderContent>

      {isFirstModal && <TestModal ref={modal1}>
          <div>x</div>
          <div>첫번째 모달입니다.</div>
      </TestModal>}
      {isSecondModal && <TestModal ref={modal2}>두 번째 모달입니다!</TestModal>}
      {isThirdModal && <TestModal ref={modal3}>세 번째 모달입니다!</TestModal>}
    </HeaderContainer>
  );
};

export default Header;

const TestModal = styled.div`
  position: fixed; /* 화면에 고정 */
  top: 50%; /* 세로 중심 */
  left: 50%; /* 가로 중심 */
  transform: translate(-50%, -50%); /* 완전한 중앙 정렬 */
  width: 50%; /* 너비 설정 */
  height: 50%; /* 높이 설정 */
  z-index: 10000; /* 상위 요소로 설정 */
  background-color: rgba(0, 0, 0, 0.8); /* 반투명 배경 */
  color: white; /* 텍스트 색상 */
  display: flex; /* 내용 정렬 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font:white;
`;

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
  width: 47%;
  height: 30%;
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
  justify-content: center;
  gap: 15%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

const MobileMenuItem = styled.div`
  color: black;
  font-size: 10px;
  cursor: pointer;
`;

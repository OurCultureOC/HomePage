import styled from 'styled-components';
import NurimLogo from '../assets/firstpage/Logo.png';
import MainIntro from '../components/MainIntro';

const First = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo src={NurimLogo} alt="Nurim Logo" />
          <Menu>
            <MenuItem>누림이란?</MenuItem>
            <MenuItem>앞으로의 누림</MenuItem>
            <MenuItem>이용약관</MenuItem>
          </Menu>
        </HeaderContent>
      </Header>

      <MainIntroWrapper>
        <MainIntro />
      </MainIntroWrapper>
    </Container>
  );
};

export default First;

// 스타일드 컴포넌트 정의
const Container = styled.div`
  background-color: #ffecdf;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: white;
  width: 100%;
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
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const MainIntroWrapper = styled.div`
  width: 50%;
  height: 80vh;
  margin: 8px auto;
`;

import styled from 'styled-components';
import NurimLogo from '../assets/firstpage/Logo.png';
import MainIntro from '../components/MainIntro';
import Header from '../components/Header';

const First = () => {
  return (
    <Container>
      <Header />
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

const MainIntroWrapper = styled.div`
  width: 50%;
  height: 80vh;
  margin: 8px auto;
`;

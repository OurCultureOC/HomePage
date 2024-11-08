import styled from 'styled-components';

const Second = ({ image }) => {
  return (
    <Background>
      <IphoneFrame>
        {/* <Notch /> */}
        <Screen>
          <Screenshot src={image} alt="스크린샷" />
        </Screen>
      </IphoneFrame>
    </Background>
  );
};

export default Second;

const Background = styled.div`
  background-color: #ff8224;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IphoneFrame = styled.div`
  position: relative;
  width: 345px;
  height: 612px;
  background-color: #f8f4e3;
  border-radius: 50px;
  padding: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Notch = styled.div`
  position: absolute;
  top: 8px;
  width: 210px;
  height: 30px;
  background-color: black;
  border-radius: 10px;
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Screenshot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

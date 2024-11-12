import styled from "styled-components";

const SecondContent = ({
  image,
  textImage,
  fontSize,
  textMarginTop,
  textMarginLeft,
  textMarginRight,
  firstLine,
  secondStartLine,
  secondImgText,
  secondLastLine,
  thirdLine,
  fourLine,
  fiveLine,
  circleMargin,
  circleWidth,
}) => {
  return (
    <Background>
      <MainContainer>
        <TextArea>
          <TextContainer fontSize={fontSize.smallFont}>
            {firstLine}
          </TextContainer>
          <ImgTextContainer>
            <TextContainer
              fontSize={fontSize.bigFont}
              $textMarginRight={textMarginRight}
            >
              {secondStartLine}
            </TextContainer>
            <TextContainer fontSize={fontSize.bigFont}>
              {secondImgText}
            </TextContainer>
            <ImgText
              src={textImage}
              alt="동그라미"
              $circleMargin={circleMargin}
              $circleWidth={circleWidth}
            />
            <TextContainer
              fontSize={fontSize.bigFont}
              $textMarginLeft={textMarginLeft}
            >
              {secondLastLine}
            </TextContainer>
          </ImgTextContainer>
          <TextContainer
            fontSize={fontSize.bigFont}
            $textMarginTop={textMarginTop}
          >
            {thirdLine}
          </TextContainer>
          <TextContainer fontSize={fontSize.smallFont}>
            {fourLine}
          </TextContainer>
          <TextContainer fontSize={fontSize.smallFont}>
            {fiveLine}
          </TextContainer>
        </TextArea>
        <IphoneFrame>
          <Screen>
            <Screenshot src={image} alt="스크린샷" />
          </Screen>
        </IphoneFrame>
      </MainContainer>
    </Background>
  );
};

export default SecondContent;

const Background = styled.div`
  background-color: #ff8224;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; /* 가로 배치 */
  gap: 20px; /* 간격 조정 */
`;

const TextContainer = styled.div`
  color: white;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "1rem"};
  margin-top: ${(props) => props.$textMarginTop || "0"};
  margin-left: ${(props) => props.$textMarginLeft || "0"};
  margin-right: ${(props) => props.$textMarginRight || "0"};
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

const MainContainer = styled.div`
  width: 45%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8vh;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ImgTextContainer = styled.div`
  display: flex;
  position: relative;
`;

const ImgText = styled.img`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  width: ${(props) => props.$circleWidth || "0"};
  height: 6rem;
  margin-top: -0.5rem;
  margin-left: ${(props) => props.$circleMargin || "0"};
  z-index: 10;
`;

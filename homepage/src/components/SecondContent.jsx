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
          <SmallTextContainer fontSize={fontSize.smallFont}>{firstLine}</SmallTextContainer>
          <ImgTextContainer>
            <BigTextContainer fontSize={fontSize.bigFont} $textMarginRight={textMarginRight}>{secondStartLine}</BigTextContainer>
            <BigTextContainer fontSize={fontSize.bigFont}>{secondImgText}</BigTextContainer>
            <ImgText src={textImage} alt="동그라미" $circleMargin={circleMargin} $circleWidth={circleWidth}/>
            <BigTextContainer fontSize={fontSize.bigFont} $textMarginLeft={textMarginLeft}>{secondLastLine}</BigTextContainer>
          </ImgTextContainer>
          <BigTextContainer fontSize={fontSize.bigFont} $textMarginTop={textMarginTop}>{thirdLine}</BigTextContainer>
          <SmallTextContainer fontSize={fontSize.smallFont}> {fourLine}</SmallTextContainer>
          <SmallTextContainer fontSize={fontSize.smallFont}>{fiveLine}</SmallTextContainer>
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
const IphoneFrame = styled.div`
  width: 345px;
  height: 612px;
  background-color: #f8f4e3;
  border-radius: 50px;
  padding: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 680px) {
    width: 295px;
    height: 512px;
  }
  @media (max-height: 680px) {
    width: 245px;
    height: 412px;
  }
  @media (max-height: 890px) {
    width: 245px;
    height: 412px;
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    width: 245px;
    height: 412px;
  }
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
  width: 60%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 1024px) {
    flex-direction: column; /* 세로 배치 */
    align-items: center; /* 수평 가운데 정렬 */
    justify-content: center; /* 수직 가운데 정렬 */
    height: auto; /* 필요 시 높이 자동 조정 */
    gap: 10px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const SmallTextContainer = styled.div`
  color: white;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "1rem"};
  margin-top: ${(props) => props.$textMarginTop || "0"};
  margin-left: ${(props) => props.$textMarginLeft || "0"};
  margin-right: ${(props) => props.$textMarginRight || "0"};
  @media (max-width: 680px) {
    font-size: 15px;
  }
  @media (max-height: 785px) {
    font-size: 13px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
  @media (max-height: 845px) {
    font-size: 13px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    font-size: 13px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
`;

const BigTextContainer = styled.div`
  color: white;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "1rem"};
  margin-top: ${(props) => props.$textMarginTop || "0"};
  margin-left: ${(props) => props.$textMarginLeft || "0"};
  margin-right: ${(props) => props.$textMarginRight || "0"};
  @media (max-width: 680px) {
    font-size: 52px;
  }
  @media (max-height: 785px) {
    font-size: 32px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
  @media (max-height: 845px) {
    font-size: 32px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    font-size: 32px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  }
  /* @media (max-width: 1400px) and (max-height: 770px) {
    font-size: 32px;
    margin-left: ${(props) => (props.$textMarginLeft ? `calc(${props.$textMarginLeft} - 10px)` : "0")};
    margin-right: ${(props) => props.$textMarginRight ? `calc(${props.$textMarginRight} - 10px)` : "0"};
  } */
`
const ImgTextContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const ImgText = styled.img`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: ${(props) => props.$circleWidth || "0"};
  height: 6rem;
  /* margin-top: -0.5rem; */
  margin-left: ${(props) => props.$circleMargin || "0"};
  z-index: 10;
  @media (max-width: 680px) {
    width: ${({ $circleWidth }) => `calc(${parseFloat($circleWidth || "5")}rem - 2rem)`};
    margin-left: ${(props) =>
    props.$circleMargin === "9.5rem" ? "6.5rem" : props.$circleMargin || "0"};
    height: 4rem
  }
  @media (max-height: 785px) {
    width: ${({ $circleWidth }) => `calc(${parseFloat($circleWidth || "5")}rem - 4.3rem)`};
    margin-left: ${(props) =>
    props.$circleMargin === "9.5rem" ? "3.3rem" : props.$circleMargin || "0"};
    height: 2.5rem;
    
    top: 0.2rem;
  }
  @media (max-width: 768px) and (max-height: 1024px) {
  width: ${({ $circleWidth }) => `calc(${parseFloat($circleWidth || "5")}rem - 4.3rem)`};
  margin-left: ${(props) =>
  props.$circleMargin === "9.5rem" ? "3.3rem" : props.$circleMargin || "0"};
  height: 2.5rem;
  top: 0.2rem;
  }
  @media (max-height: 845px) {
    width: ${({ $circleWidth }) => `calc(${parseFloat($circleWidth || "5")}rem - 4.3rem)`};
    margin-left: ${(props) =>
    props.$circleMargin === "9.5rem" ? "3.3rem" : props.$circleMargin || "0"};
    height: 2.5rem;
    
    top: 0.2rem;
  }
`;

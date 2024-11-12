import styled from "styled-components";
import SecondContent from "../components/SecondContent";
import testImage from "../assets/firstpage/image.png";
import circle from "../assets/secondpage/Circle.png";
import { useState, useEffect } from "react";

const Second = () => {
  const [currentContent, setCurrentContent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => {
        if (prevContent === 3) {
          return 1;
        }
        return prevContent + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fontSize = {
    smallFont: "16px",
    bigFont: "72px",
  };

  return (
    <Container>
      <SlideContent
        style={{ transform: `translateX(${-(currentContent - 1) * 100}%)` }}
      >
        <Slide key={1} active={currentContent === 1}>
          <SecondContent
            image={testImage}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={""}
            textMarginRight={""}
            firstLine={"내가 먹고 싶은 전통주를"}
            secondStartLine={""}
            secondImgText={"근처"}
            secondLastLine={"에서"}
            thirdLine={"찾아보세요."}
            fourLine={"이제는 생각날 때 바로 전통주점을"}
            fiveLine={"찾아볼 수 있어요."}
            circleMargin={"-0.5rem"}
            circleWidth={"8rem"}
          />
        </Slide>
        <Slide key={2} active={currentContent === 2}>
          <SecondContent
            image={testImage}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={"20px"}
            textMarginRight={""}
            firstLine={"전통주의 종류가 궁금해!"}
            secondStartLine={"어떤"}
            secondImgText={"전통주"}
            secondLastLine={"가"}
            thirdLine={"있을까?"}
            fourLine={"전통주의 종류를 한 눈에 볼 수 있어요."}
            fiveLine={""}
            circleMargin={"9.5rem"}
            circleWidth={"10rem"}
          />
        </Slide>
        <Slide key={3} active={currentContent === 3}>
          <SecondContent
            image={testImage}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={""}
            textMarginRight={"20px"}
            firstLine={"내 주변 주막을 찾고 싶다면!"}
            secondStartLine={""}
            secondImgText={"근처"}
            secondLastLine={"전통주점"}
            thirdLine={"어디있지?"}
            fourLine={"내 주변 전통주점을 찾고 싶을 때도"}
            fiveLine={"바로 확인할 수 있어요."}
            circleMargin={"-0.5rem"}
            circleWidth={"8rem"}
          />
        </Slide>
      </SlideContent>
    </Container>
  );
};

export default Second;

const Container = styled.div`
  background-color: #ff8224;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 2s ease-in-out; /* 2초 애니메이션 */
  display: flex;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  transition: opacity 3s ease-in-out; /* opacity 1초 애니메이션 */
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  transition: opacity 1s ease-in-out, visibility 0s 1s; /* 1초 동안 opacity 변화 */
`;

import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data.js";
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  overflow: "hidden",
  "@bp1": { display: "none" },
});
const Arrow = styled("div", {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "#EDEDED",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  position: "absolute",
  opacity: ".6",
  bottom: "50%",
  top: "50%",
  variants: {
    direction: {
      left: { left: "1.5em" },
      right: { right: "1.5em" },
    },
  },
  "&:hover": { opacity: "1" },
  zIndex: "1",
});

const Wrapper = styled("div", {
  height: "100%",
  display: "flex",
});
const Slide = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  padding: "1rem",
  alignItems: "center",
  variants: {
    bg: {
      green: { backgroundColor: "#ffe6e4" },
      lGreen: { backgroundColor: "lightGreen" },
    },
  },
  transform: `translateX($$transform)`,
});

const ImgContainer = styled("div", {
  height: "100%",
  flex: "1",
});
const Image = styled("img", {
  height: "80%",
  maxWidth: "52em",
  objectFit: "cover",
});
const InfoContainer = styled("div", {
  padding: "50px",
  flex: "1",
});
const Button = styled("button", {
  padding: "10px",
  fontSize: "20px",
  backgroundColor: "transparent",
  cursor: "pointer",
});
const Title = styled("h1", {
  fontSize: "3em",
});
const Desc = styled("p", {
  margin: "50px 0",
  fontSize: "20px",
  fontWeight: "500",
  letterSpacing: "3px",
});
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : slideIndex - 1);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item, index) => (
          <Slide
            bg={item.bg}
            key={index}
            css={{ $$transform: `${slideIndex * -100}vw` }}
          >
            <ImgContainer>
              <Image src={item.url} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;

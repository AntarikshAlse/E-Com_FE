import React from "react";
import { SendSharp } from "@mui/icons-material";
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled("div", {
  minHeight: "50vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fddefb",
  position: "relative",
});
const InputContainer = styled("div", {
  height: "40px",
  width: "30%",
  display: "flex",
  backgroundColor: "white",
  justifyContent: "space-between",
  "@bp1": { width: "auto" },
});
const Input = styled("input", {
  border: "none",
  paddingLeft: "20px",
  flex: "8",
});
const Button = styled("button", {
  backgroundColor: "teal",
  flex: "1",
  border: "none",
  padding: "8px",
});
const Title = styled("h1", {
  fontSize: "3rem",
  "@bp1": { fontSize: "2rem" },
});
const Desc = styled("p", {
  marginBottom: "0.8rem",
  fontSize: "1.5rem",
  fontWeight: "300",
  "@bp1": { fontSize: "1rem" },
});
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely update for our new products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendSharp />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

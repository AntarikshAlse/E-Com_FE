import React from "react";
import stitches from "../stitches";
import { Link } from "react-router-dom";
const { styled } = stitches;
const Container = styled("div", {
  flex: 1,
  margin: ".2em",
  height: "70vh",
  position: "relative",
});
const Info = styled("div", {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "#303b3030",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover", //crop and fit to div size
  "@bp1": { height: "30vh" },
});
const Title = styled("h1", {
  color: "white",
});
const Button = styled("button", {
  marginTop: "1em",
  padding: "0.8em",
  fontWeight: "bold",
  cursor: "pointer",
});
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

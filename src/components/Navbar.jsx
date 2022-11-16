import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled("div", {
  height: "3.75em",
});
const Wrapper = styled("div", {
  padding: "0.6rem 1rem",
  display: "flex",
  justifyContent: "space-between",
  '@bp1':{padding: "0.6rem"}
});
const Left = styled("div", {
  flex: "1",
  display: "flex",
  alignItems: "center",
});
const Language = styled("div", {
  fontSize: "14px",
  '@bp1': {display: "none"},
});
const SearchContainer = styled("div", {
  border: ".5px solid grey",
  display: "flex",
  marginLeft: "1.2rem",
  justifyContent: "space-between",
  alignItems: "center",
});
const Input = styled("input", {
  border: "none",
  '@bp1':{width:'6rem'}
});
const MenuItem = styled("div", {
  marginLeft: "1.2rem",
  cursor: "pointer",
});
const Logo = styled("div", {
  fontWeight: "bold",
  fontSize: "1.5rem",
  '@bp1':{fontSize:'1rem'}
});
const Right = styled("div", {
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  '@bp1':{fontSize:'1rem',flex:'2'}
});
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Easy Shop</Logo>
        </Left>
        <Right>
        <Language css={{'bp1':{color:'red'}}}>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "lightgray" }} />
          </SearchContainer>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import stitches from "../stitches";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../redux/store";
import { useNavigate } from "react-router-dom";
const { styled } = stitches;

const Container = styled("div", {
  height: "3.75em",
});
const Wrapper = styled("div", {
  padding: "0.6rem 1rem",
  display: "flex",
  justifyContent: "space-between",
  "@bp1": { padding: "0.6rem" },
});
const Left = styled("div", {
  flex: "1",
  display: "flex",
  alignItems: "center",
});
const Input = styled("input", {
  border: "none",
  "@bp1": { width: "6rem" },
});
const MenuItem = styled("div", {
  marginLeft: "1.2rem",
  cursor: "pointer",
});
const Logo = styled("div", {
  fontWeight: "bold",
  fontSize: "1.5rem",
  "@bp1": { fontSize: "1rem" },
});
const Right = styled("div", {
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "@bp1": { fontSize: "1rem", flex: "2" },
});
const Navbar = () => {
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.cartItems);
  const { currentUser } = useSelector((state) => state.user);
  const logout = () => {
    persistor.purge();
    navigate("/login");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Easy Shop</Logo>
        </Left>
        <Right>
          {currentUser ? (
            <>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </>
          ) : (
            <></>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

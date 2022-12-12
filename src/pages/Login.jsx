import { styled } from "@stitches/react";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { login } from "../redux/apiCall";
const Container = styled("div", {
  background: `url(/images/shopping-bg.jpg)`,
  height: "100vh",
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Wrapper = styled("div", {
  width: "25%",
  padding: "1.2em",
  backgroundColor: "white",
});
const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
});
const Title = styled("h1", {
  fontSize: "1.3rem",
  fontWeight: "400",
});
const Input = styled("input", {
  flex: "1",
  minWidth: "40%",
  marginTop: ".8rem",
  padding: "0.6rem",
});
const Button = styled("button", {
  MinWidth: "40%",
  border: "none",
  padding: ".6rem 1.2rem",
  backgroundColor: "teal",
  color: "white",
  marginTop: ".8rem",
  cursor: "pointer",
  "&:disabled": { backgroundColor: "Gray", cursor: "not-allowed" },
});
const Link = styled("a", {
  fontSize: "1rem",
  fontWeight: "400",
  alignSelf: "center",
  margin: ".3rem 0",
  color: "DodgerBlue",
  cursor: "pointer",
  textDecoration: "underline",
});
const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { isFetching, error, errorMessage } = useSelector(
    (state) => state.user
  );
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {
      username: userRef.current.value,
      password: passRef.current.value,
    });
    if (error) {
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" ref={userRef} />
          <Input placeholder="Password" type="password" ref={passRef} />
          <Button onClick={handleLogin} disabled={Boolean(isFetching)}>
            Login
          </Button>
          <Link>Forgot Password</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

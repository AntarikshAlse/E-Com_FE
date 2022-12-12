import { styled } from "@stitches/react";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { login } from "../redux/apiCall";
import { useNavigate, Link } from "react-router-dom";
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
const LinkTo = {
  fontSize: "1rem",
  fontWeight: "400",
  alignSelf: "center",
  margin: ".3rem 0",
  color: "DodgerBlue",
  cursor: "pointer",
  textDecoration: "none",
};
const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, errorMessage } = useSelector(
    (state) => state.user
  );
  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await login(dispatch, {
      username: userRef.current.value,
      password: passRef.current.value,
    });
    if (response.status === 200) {
      if (response.data === "Wrong Password") {
        enqueueSnackbar(response.data, { variant: "error" });
        return;
      }
      navigate("/");
    } else {
      if (response.response.status === 401) {
        enqueueSnackbar(response.response.data, { variant: "error" });
        return;
      }
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleLogin}>
          <Input placeholder="Username" ref={userRef} required />
          <Input
            placeholder="Password"
            type="password"
            ref={passRef}
            required
          />
          <Button disabled={Boolean(isFetching)}>Login</Button>
          <Link to="/register" style={LinkTo}>
            CREATE NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

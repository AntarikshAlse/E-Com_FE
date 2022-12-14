import stitches from "../stitches";
import React, { useRef } from "react";
import { useSnackbar } from "notistack";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
const { styled } = stitches;
const Container = styled("div", {
  //background: `linear-gradient(111deg, rgba(255,184,50,0.2) 0%, rgba(255,153,0,0.2) 49%, rgba(235,142,2,.2) 100%),url(/images/shopping-bg.jpg)`,
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
  width: "20%",
  textAlign: "center",
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
  margin: ".5em 0",
  padding: "0.6rem",
});
const Agreement = styled("span", {
  fontSize: "1rem",
  margin: ".8rem 0",
  textAlign: "revert",
});
const Button = styled("button", {
  MinWidth: "40%",
  border: "none",
  padding: ".6rem 1.2rem",
  backgroundColor: "teal",
  color: "white",
  margin: ".8rem 1rem 0 0",
  flexBasis: "2rem",
});
const Register = () => {
  const inputRef = useRef({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    try {
      let response = await publicRequest.post("/auth/register", {
        username: inputRef.current.username.value,
        email: inputRef.current.email.value,
        password: inputRef.current.password.value,
      });
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (e) {
      //Already Exists error
      if (e.response.data.keyPattern) {
        let message = Object.keys(e.response.data.keyValue);
        enqueueSnackbar(`${message} already exists`, { variant: "error" });
      } else {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={signUp}>
          <Input
            placeholder="Username"
            required
            ref={(el) => (inputRef.current["username"] = el)}
          />
          <Input
            placeholder="E-mail address"
            type="email"
            required
            ref={(el) => (inputRef.current["email"] = el)}
          />
          <Input
            placeholder="Password"
            type="password"
            required
            ref={(el) => (inputRef.current["password"] = el)}
          />
          <Agreement>
            By Creating an Account you Agree the terms and conditions and{" "}
            <b>Privacy Policy</b>.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

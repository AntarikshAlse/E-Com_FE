import stitches from "../stitches";

const { styled } = stitches;
const Container = styled("div", {
  //background: `linear-gradient(111deg, rgba(255,184,50,0.2) 0%, rgba(255,153,0,0.2) 49%, rgba(235,142,2,.2) 100%),url(/images/shopping-bg.jpg)`,
  background: `url(/images/shopping-bg.jpg)`,
  height: "100vh",
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundSize: "cover",
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
});
const Wrapper = styled("div", {
  width:'40%',
  padding:'1.2em',
  backgroundColor:'white',

});
const Form = styled("form", {
  display:'flex',
  flexWrap:'wrap',

});
const Title = styled("h1", {
  fontSize:'1.3rem',
  fontWeight:'400'
});
const Input = styled("input", {
  flex:'1',
  minWidth:'40%',
  margin:'.8rem 1rem 0 0',
  padding:'0.6rem'
});
const Agreement = styled("span", {
  fontSize:'1rem',
  margin:'1.2rem 0'

});
const Button = styled("button", {
  MinWidth:'40%',
  border:'none',
  padding:'.6rem 1.2rem',
  backgroundColor:'teal',
  color:'white',
  margin:'.8rem 1rem 0 0',
 flexBasis:'15rem',

});
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="E-mail address" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
        <Agreement>By Creating an Account you Agree the terms and conditions and <b>Privacy Policy</b>.</Agreement>
        <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

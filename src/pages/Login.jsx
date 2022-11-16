import {styled} from '@stitches/react';

const Container = styled("div", {
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
  width:'25%',
  padding:'1.2em',
  backgroundColor:'white',

});
const Form = styled("form", {
  display:'flex',
  flexDirection:'column',

});
const Title = styled("h1", {
  fontSize:'1.3rem',
  fontWeight:'400'
});
const Input = styled("input", {
  flex:'1',
  minWidth:'40%',
  marginTop:'.8rem',
  padding:'0.6rem'
});
const Button = styled("button", {
  MinWidth:'40%',
  border:'none',
  padding:'.6rem 1.2rem',
  backgroundColor:'teal',
  color:'white',
  marginTop:'.8rem',
});
const Link = styled('a',{
  fontSize:'1rem',
  fontWeight:'400',
  alignSelf:'center',
  margin:'.3rem 0',
  color:'DodgerBlue',
  cursor:'pointer',
  textDecoration:'underline'
});
const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Sign In</Title>
      <Form>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button>Login</Button>
      <Link>Forgot Password</Link>
      <Link>CREATE NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
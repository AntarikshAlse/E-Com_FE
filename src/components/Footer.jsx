import { Instagram ,Facebook,Twitter,Phone,Room,Mail} from '@mui/icons-material';
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled('div',{
    justifyContent: 'center',
   display:'flex',
   '@bp1':{flexDirection:'column'}
});

const Left = styled('div',{
    flex:'1',
    display:'flex',
    flexDirection:'column',
    padding:'20px',

});
const Logo = styled('h1',{
    fontSize:'2em',
});
const Desc = styled('p',{
    margin:'20px 0px'
});
const SocialContainer = styled('div',{
    display:'flex',

});
const Center = styled('div',{
    flex:'1',
    padding:'20px',
    '@bp1':{display:'none'}
});
const Title = styled('h3',{
    marginBottom:'30px'
});
const List = styled('ul',{
    listStyle:'none',
    padding:'0',
    display:'flex',
    flexWrap:'wrap'
});
const ListItem = styled('li',{
    width:'50%',
    
    marginBottom:'10px',
});
const Right = styled('div',{
    flex:'1',
    padding:'20px',
    '@bp1':{backgroundColor:'#faf3f3'}
});

const ContactItem = styled('div',{
    marginBottom:'1em',
    display:'flex',
    alignItems:'center',
});
const PaymentImg = styled('img',{
height:'2.3em',
});
const SocialIcon = styled('div',{
    width:'2em',
    height:'2em',
    scale:'0.9',
    borderRadius:'50%',
    color:'white',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'.8em',
    backgroundColor: '$$bg'
});
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Easy Shop</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas minima commodi corporis officia fugit!</Desc>
            <SocialContainer>
                <SocialIcon css={{$$bg:'#3B5999'}}><Facebook   /> </SocialIcon>
                <SocialIcon css={{$$bg:'#E4405F'}}><Instagram  /></SocialIcon>
                <SocialIcon css={{$$bg:'#55ACEE'}}><Twitter  /></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Appreals</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:'10px'}}/> 622 Bols Street,South Carolina 9866</ContactItem>
            <ContactItem><Phone style={{marginRight:'10px'}}/> +1 234 567</ContactItem>
            <ContactItem><Mail style={{marginRight:'10px'}}/> contact@easyshop.com</ContactItem>
            <PaymentImg src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"/>
        </Right>
    </Container>
  )
}

export default Footer
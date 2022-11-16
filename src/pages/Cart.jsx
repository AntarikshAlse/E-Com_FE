/* language : javascriptreact */
import stitches from "../stitches";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import React from "react";
import { Add ,Remove} from "@mui/icons-material";
const { styled } = stitches;

const Container = styled("div", {});
const Wrapper = styled("div", {
  padding: "20px",
  fontWeight: "300",
  textAlign: "center",
});
const Top = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Title = styled("h1", {
  marginBottom:'.6rem'
});
const TopButton = styled("div", {
  padding: "10px",
  cursor: "pointer",
  fontWeight: "600",
  //border: `$$bd`,
  boxShadow: `inset 0px 0px 0px $$bd black`,
  backgroundColor: `$$bg`,
  color: `$$clr`,
  cursor: "pointer",
  minWidth: "14%"
});
const Bottom = styled("div", {
  display: "flex",
  margin:'1rem 0',
  justifyContent: "space-between",
  '@bp1':{flexDirection:'column'}
});
const TopTextBox = styled("div", {
  '@bp1':{display:'none'}
});
const TopText = styled("span", {
  color: "DodgerBlue",
  fontWeight: "400",
  cursor: "pointer",
  margin: "0 0.8rem",
});
const Info = styled("div", {flex: "3"});
//Product
const Product = styled('div',{
  display:'flex',
  justifyContent:'center' ,
  '@bp1':{flexDirection:'column'}
});

const ProductDetail = styled('div',{
  flex:'2',
  display:'flex'
});

const Image = styled('img',{
width:'200px'
});
const Details = styled('div',{
  padding:'1.2rem',
  textAlign:'start',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around'
});
const ProductId = styled('span',{});
const ProductName = styled('span',{});
const ProductColor = styled('div',{
  width:'1.2rem',
  height:'1.2rem',
  borderRadius:'50%',
  backgroundColor:'$$clr'
});
const ProductSize = styled('span',{
});
const ProductAmountContainer = styled('div',{
  display:'flex',
  alignItems:'center',
  marginBottom:'1.4rem'

});

const ProductAmount = styled('div',{
  fontSize:'1.4rem',
  margin:'.4rem',
});
const ProductPrice = styled('div',{
  display:'flex',
  alignItems:'center',
  fontSize:'1.5rem',
  margin:'.4rem'

});
const PriceDetail = styled('div',{
  flex:'1',
  alignSelf:'center'
});
const Hr = styled('hr',{
  backgroundColor:'#eee',
   border:'none',
   height:'0.1rem',
   margin:'.1em 0'
});
// Summary
const Summary = styled('div',{
  flex:'1',
  border:'.5px solid lightgray',
  borderRadius:'0.8rem',
  padding:'1.2rem'
});
const SummaryTitle = styled('h2',{
  fontWeight:'200'
});
const SummaryItem = styled('div',{
  margin:'1.8rem 0',
  display:'flex',
  justifyContent:'space-between',
  fontWeight:"400",
  variants:{
    type:{
      total:{
        fontWeight:"500",
        fontSize:"1.5rem",
      },
    }

  }

});
const SummaryItemText = styled('span',{});
const SummaryItemPrice = styled('span',{});
const SummaryButton = styled('button',{
  width:"100%", 
  padding:'.8rem',
  backgroundColor:'darkorange',
  fontWeight:'600',
  fontSize:'1rem',
  border:'none'
});
const imageUrl = "https://th.bing.com/th/id/OIP.5orV7-U6RFajodwaD4N2XQHaFN?w=297&h=208&c=7&r=0&o=5&dpr=1.4&pid=1.7";
const Cart = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
            <TopButton css={{ $$bg: "white", $$bd: "2px" }}>
              CONTINUE SHOPPING
            </TopButton>
            <TopTextBox>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your WhishList (2)</TopText>
            </TopTextBox>
            <TopButton css={{ $$bg: "darkorange", $$bd: "none" }}>
              CHECKOUT NOW
            </TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src={imageUrl} alt="Product Image" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Jessie Thunder Shoes
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 987654321
                    </ProductId>
                    <ProductColor css={{$$clr:'black'}}/>
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                      <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <ProductDetail>
                  <Image src='https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg' alt="Product Image" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Nike Shirt
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 987654321
                    </ProductId>
                    <ProductColor css={{$$clr:'black'}}/>
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                      <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$ 7</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
              <SummaryItemText>Sub Total </SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;

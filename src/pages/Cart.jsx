/* language : javascriptreact */
import stitches from "../stitches";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import React from "react";
import { Add, Remove } from "@mui/icons-material";
const { styled } = stitches;
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { userRequest } from "../requestMethods";
import { Delete } from "@mui/icons-material";
import { deleteProduct } from "../redux/cartRedux";
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
  marginBottom: ".6rem",
});
const TopButton = styled("button", {
  padding: "10px",
  cursor: "pointer",
  fontWeight: "600",
  border: `$$bd`,
  boxShadow: `inset 0px 0px 0px $$bd black`,
  backgroundColor: `$$bg`,
  color: `$$clr`,
  marginTop: "1em",
  minWidth: "14%",
});
const Bottom = styled("div", {
  display: "flex",
  margin: "1rem 0",
  justifyContent: "space-between",
  "@bp1": { flexDirection: "column" },
});
const TopTextBox = styled("div", {
  "@bp1": { display: "none" },
});
const TopText = styled("span", {
  color: "DodgerBlue",
  fontWeight: "400",
  cursor: "pointer",
  margin: "0 0.8rem",
});
const Info = styled("div", { flex: "3" });
//Product
const Product = styled("div", {
  display: "flex",
  justifyContent: "center",
  "@bp1": { flexDirection: "column" },
});

const ProductDetail = styled("div", {
  flex: "2",
  display: "flex",
});

const Image = styled("img", {
  width: "200px",
});
const Details = styled("div", {
  padding: "1.2rem",
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});
const ProductId = styled("span", {});
const ProductName = styled("span", {});
const ProductColor = styled("div", {
  width: "1.2rem",
  height: "1.2rem",
  borderRadius: "50%",
  backgroundColor: "$$clr",
});
const ProductSize = styled("span", {});
const ProductAmountContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "1.4rem",
});

const ProductAmount = styled("div", {
  fontSize: "1.4rem",
  margin: ".4rem",
});
const ProductPrice = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  margin: ".4rem",
});
const PriceDetail = styled("div", {
  flex: "1",
  alignSelf: "center",
});
const Hr = styled("hr", {
  backgroundColor: "#eee",
  border: "none",
  height: "0.1rem",
  margin: ".1em 0",
});
// Summary
const Summary = styled("div", {
  flex: "1",
  border: ".5px solid lightgray",
  borderRadius: "0.8rem",
  padding: "1.2rem",
});
const SummaryTitle = styled("h2", {
  fontWeight: "200",
});
const SummaryItem = styled("div", {
  margin: "1.8rem 0",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "400",
  variants: {
    type: {
      total: {
        fontWeight: "500",
        fontSize: "1.5rem",
      },
    },
  },
});
const SummaryItemText = styled("span", {});
const SummaryItemPrice = styled("span", {});
const SummaryButton = styled("button", {
  width: "100%",
  padding: ".8rem",
  backgroundColor: "darkorange",
  fontWeight: "600",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
});
const Cart = () => {
  const { enqueueSnackbar } = useSnackbar();
  const cart = useSelector((state) => state.cart);
  const products = cart.products;
  const isCartEmpty = Boolean(products.length === 0);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };
  const checkout = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest.post("checkout/payment", {
        amount: Number(cart.total * 100),
      });
      let data = await response.data;
      if (response.status === 200 || response.statusText === "OK") {
        // On success redirect the customer to the returned URL
        window.location = data.url;
      } else {
        enqueueSnackbar(response.error, { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.error, { variant: "error" });
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>{/* Top Container */}</Top>
          <Bottom>
            <Info>
              {products?.map((product, index) => (
                <React.Fragment key={index}>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} alt="Product Image" />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor css={{ $$clr: product.color }} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount>
                          <b>Qty:</b> {product.quantity}
                        </ProductAmount>
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount>
                          <Delete
                            onClick={() => removeProduct(product._id)}
                            style={{ cursor: "pointer", color: "red" }}
                          />
                        </ProductAmount>
                      </ProductAmountContainer>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </React.Fragment>
              ))}
              {products.length === 0 && (
                <>
                  <h1>Your Cart is Empty</h1>
                  <Link to="/">
                    <TopButton css={{ $$bg: "white", $$bd: "1px" }}>
                      CONTINUE SHOPPING
                    </TopButton>
                  </Link>
                </>
              )}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Sub Total </SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton onClick={checkout} disabled={isCartEmpty}>
                CHECKOUT NOW
              </SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Remove } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import React from "react";
import stitches from "../stitches";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useSnackbar } from "notistack";
import { useRef } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const { styled } = stitches;
const Container = styled("div", {});
const Wrapper = styled("div", {
  display: "flex",
  //flexWrap:'wrap', //wrap at media query mobile
  padding: "0.6rem",
  "@bp1": { flexDirection: "column" },
});
const Image = styled("img", {
  maxHeight: "60vh",
  width: "100%",
  objectFit: "cover",
});
const Title = styled("h2", {});
const Desc = styled("p", {});
const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 2rem 1rem 1rem",
  "@bp1": { padding: "1rem 1rem 1rem 0" },
});

const Price = styled("span", {
  fontWeight: "100",
  fontSize: "2.5rem",
  marginTop: ".5em",
});
//Filter
const FilterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "1.8em 0",
});
const Filter = styled("div", {
  display: "flex",
  alignItems: "center",
});
const FilterTitle = styled("span", {
  fontSize: "1.5rem",
  fontWeight: "200",
  marginRight: "0.5em",
});
const FilterColor = styled("div", {
  width: "1.2em",
  height: "1.2em",
  borderRadius: "50%",
  margin: "0 .2rem",
  cursor: "pointer",
  backgroundColor: "$$bg",
});
const FilterSize = styled("select", {
  padding: ".8em",
});
const Option = styled("option", {
  padding: "1em",
});
//add
const AddContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const AmountContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Amount = styled("span", {
  padding: ".6em 1em",
  border: "1px solid teal",
  borderRadius: "20%",
  display: "flex",
  alignItems: "center",
});
const Button = styled("button", {
  padding: "1em",
  border: "2px solid teal",
  backgroundColor: "white",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f8f4f4",
  },
});
const Product = () => {
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const colorRef = useRef("");
  const sizeRef = useRef("");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let response = await publicRequest.get("/products/find/" + id);
  //       setProduct(response.data);
  //     } catch (e) {
  //       enqueueSnackbar(e.message, { variant: "error" });
  //     }
  //   }
  //   fetchData();
  // }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };
  const handleColor = (color) => {
    setColor(color);
  };
  // write handleclick function with no arguments

  const handleClick = () => {
    // after ES6 support same key : value can be key . eg: {product:product} === {product}
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size: sizeRef.current.value,
      })
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Image src={product.img} alt="Product Image" />
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  key={color}
                  onClick={() => handleColor(color)}
                  css={{ $$bg: color }}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize ref={sizeRef}>
                {product.size?.map((size) => (
                  <Option key={size} value={size}>
                    {size}
                  </Option>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;

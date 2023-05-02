import { styled } from "@stitches/react";
import { productsItems } from "../data";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useSnackbar } from "notistack";
import { memo } from "react";
const Container = styled("div", {
  /*  display:'grid',
    gridGap: '4rem',
    padding:'1.4em',
    gridTemplateColumns:'repeat(auto-fit,12rem)' */
  display: "flex",
  flexWrap: "wrap",
  padding: "1rem",
  justifyContent: "center",
  gap: ".6rem",
});

const Products = ({ cat, filters, sort }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = cat ? `products?category=${cat}` : `products`;
        const res = await publicRequest.get(url);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    let Products = [...products];
    cat &&
      setFilteredProducts(
        Products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  if (cat && !filteredProducts.length) {
    return (
      <Container>
        <h2>No products found</h2>
      </Container>
    );
  }
  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => (
            <ProductItem item={product} key={product._id} />
          ))
        : products
            .slice(0, 12) // Max of 12  items on home page
            .map((product) => <ProductItem item={product} key={product._id} />)}
    </Container>
  );
};

export default memo(Products);

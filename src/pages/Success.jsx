import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartRedux";
const Success = () => {
  const dispatch = useDispatch();
  const payBtn = {
    border: "none",
    color: "white",
    textAlign: "center",
    padding: "1rem 2rem",
    fontSize: "large",
    backgroundColor: "teal",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1rem",
  };
  const container = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "18rem",
  };
  const title = {
    margin: "1rem",
    color: "teal",
  };
  useEffect(() => {
    dispatch(clearCart());
  }, []);
  return (
    <div style={container}>
      <h1 style={title}>Successfull</h1>
      <h3>Your order is being prepared thakyou for choosing Easy Shop</h3>
      <Link to="/">
        <button style={payBtn}>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Success;

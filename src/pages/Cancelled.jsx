import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Cancelled = () => {
  const location = useLocation();
  const container = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "18rem",
  };
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
  return (
    <section style={container}>
      <h3>The order has been canceled,we were unable to process the payment</h3>
      <Link to="/">
        <button style={payBtn}>Continue Shopping</button>
      </Link>
    </section>
  );
};
export default Cancelled;

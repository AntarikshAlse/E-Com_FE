import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancelled from "./pages/Cancelled";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <SnackbarProvider
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancelled" element={<Cancelled />} />
            <Route
              path="/register"
              element={user ? <Navigate replace to={"/"} /> : <Register />}
            />
            <Route
              path="/login"
              element={user ? <Navigate replace to={"/"} /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
};

export default App;

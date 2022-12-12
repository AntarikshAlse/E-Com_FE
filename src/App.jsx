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
import PrivateRoute from "./PrivateRoute";
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <SnackbarProvider
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancelled" element={<Cancelled />} />
            </Route>
            <Route
              path="/register"
              element={
                currentUser ? <Navigate replace to={"/"} /> : <Register />
              }
            />
            <Route
              path="/login"
              element={currentUser ? <Navigate replace to={"/"} /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
};

export default App;

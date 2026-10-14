
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";

function Footer() {
  return (
    <footer className="footer">
      <Link className="logo footer-logo" to="/">
        BuiltTiles
      </Link>
      <p>Beautiful tiles. Beautiful spaces.</p>
      <p>© 2026 BuiltTiles. React training project.</p>
    </footer>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/categories" element={<Categories />}>
          <Route path=":category" element={<Categories />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <main className="container section empty-state">
              <h1>404 — Page not found</h1>
              <Link className="primary-button" to="/">
                Back to Home
              </Link>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

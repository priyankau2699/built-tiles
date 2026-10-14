
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.cart.wishlist);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        <span className="logo-icon">B</span>
        BuiltTiles
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/wishlist">♡ <span>{wishlist.length}</span></Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </header>
  );
}

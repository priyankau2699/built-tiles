
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TileCard from "../components/TileCard";

export default function Wishlist() {
  const wishlist = useSelector(
    (state) => state.cart.wishlist
  );

  return (
    <main className="container section">
      <h1>My Wishlist ♡</h1>
      <p className="muted">Your saved tile designs.</p>

      {wishlist.length ? (
        <div className="product-grid">
          {wishlist.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No saved tiles yet</h2>
          <p>Tap the heart on any tile to save it here.</p>
          <Link className="primary-button" to="/shop">
            Explore tiles
          </Link>
        </div>
      )}
    </main>
  );
}

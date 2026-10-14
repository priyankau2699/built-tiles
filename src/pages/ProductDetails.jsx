
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tiles } from "../data/tiles";
import {
  addToCart,
  toggleWishlist,
} from "../features/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const tile = tiles.find((item) => item.id === Number(id));

  if (!tile) {
    return (
      <main className="container section">
        <h2>Tile not found</h2>
        <Link to="/shop">Return to shop</Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <p className="eyebrow">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / Details
      </p>

      <div className="details-layout">
        <img className="details-image" src={tile.image} alt={tile.name} />

        <div>
          <p className="eyebrow">{tile.category} COLLECTION</p>
          <h1>{tile.name}</h1>
          <h2 className="price">₹{tile.price} / m²</h2>
          <p>{tile.description}</p>

          <div className="specifications">
            <p><strong>Size:</strong> {tile.size}</p>
            <p><strong>Finish:</strong> {tile.finish}</p>
            <p><strong>Color:</strong> {tile.color}</p>
            <p><strong>Category:</strong> {tile.category}</p>
          </div>

          <p className="muted">
            Prices are indicative. Contact the showroom to confirm
            stock, quantity and final pricing.
          </p>

          <button
            className="primary-button"
            onClick={() => dispatch(addToCart(tile))}
          >
            Add to cart
          </button>

          <button
            className="secondary-button"
            onClick={() => dispatch(toggleWishlist(tile))}
          >
            ♡ Add to wishlist
          </button>
        </div>
      </div>
    </main>
  );
}

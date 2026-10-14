
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  toggleWishlist,
} from "../features/cartSlice";

export default function TileCard({ tile }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.cart.wishlist
  );

  const saved = wishlist.some(
    (item) => item.id === tile.id
  );

  return (
    <article className="tile-card">
      <div className="tile-image">
        <Link to={`/product/${tile.id}`}>
          <img src={tile.image} alt={tile.name} />
        </Link>

        <button
          className={`heart ${saved ? "saved" : ""}`}
          onClick={() => dispatch(toggleWishlist(tile))}
          aria-label="Toggle wishlist"
        >
          {saved ? "♥" : "♡"}
        </button>

        <span className="category-badge">{tile.category}</span>
      </div>

      <div className="tile-info">
        <p className="eyebrow">{tile.size} · {tile.finish}</p>
        <Link className="tile-name" to={`/product/${tile.id}`}>
          {tile.name}
        </Link>

        <div className="tile-bottom">
          <p className="price">
            ₹{tile.price}
            <small> / m²</small>
          </p>

          <button
            className="add-button"
            onClick={() => dispatch(addToCart(tile))}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}

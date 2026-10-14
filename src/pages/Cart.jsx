
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!items.length) {
    return (
      <main className="container section empty-state">
        <h1>Your cart is empty</h1>
        <p>Explore our tile collection and find your favourites.</p>
        <Link className="primary-button" to="/shop">
          Browse tiles
        </Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1>Your cart</h1>
      <p className="muted">Review your selected tiles.</p>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price} / m²</p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      }))
                    }
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-total">
                <strong>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </strong>
                <button
                  className="text-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="summary">
          <h2>Order summary</h2>
          <p>Subtotal <strong>₹{subtotal.toFixed(2)}</strong></p>
          <p>Delivery <strong>Calculated later</strong></p>
          <hr />
          <h3>Total: ₹{subtotal.toFixed(2)}</h3>
          <p className="muted">
            This is a sample cart. No payment or order is processed.
          </p>
          <Link className="primary-button full-button" to="/contact">
            Request a Quote
          </Link>
          <button
            className="secondary-button full-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </aside>
      </div>
    </main>
  );
}

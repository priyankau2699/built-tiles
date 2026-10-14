
import { Link } from "react-router-dom";
import { tiles } from "../data/tiles";
import TileCard from "../components/TileCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow light">DESIGNED FOR BETTER LIVING</span>
          <h1>Beautiful tiles.<br />Beautiful spaces.</h1>
          <p>
            Discover premium floor and wall tiles
            designed to make every space special.
          </p>
          <Link className="primary-button" to="/shop">
            Explore Collection →
          </Link>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Find your perfect tile</h2>
          </div>
          <Link to="/shop">View all tiles →</Link>
        </div>

        <div className="category-grid">
          {["Ceramic", "Porcelain", "Marble", "Wooden"].map(
            (category) => (
              <Link
                className="category-card"
                to={`/categories/${category}`}
                key={category}
              >
                <span>{category}</span>
                <span>Explore collection ↗</span>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HANDPICKED FOR YOU</p>
            <h2>Featured tiles</h2>
          </div>
          <Link to="/shop">Shop all →</Link>
        </div>

        <div className="product-grid">
          {tiles.slice(0, 4).map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </section>

      <section className="promise">
        <div>
          <span>✦</span>
          <h3>Quality collections</h3>
          <p>Styles for every space and budget.</p>
        </div>
        <div>
          <span>◇</span>
          <h3>Expert guidance</h3>
          <p>Find the right finish and size.</p>
        </div>
        <div>
          <span>↗</span>
          <h3>Made for your home</h3>
          <p>Design inspiration for every room.</p>
        </div>
      </section>
    </>
  );
}

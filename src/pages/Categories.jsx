
import { Link, Outlet, useParams } from "react-router-dom";
import { categories, tiles } from "../data/tiles";
import TileCard from "../components/TileCard";

export default function Categories() {
  const { category } = useParams();

  if (!category) {
    return (
      <main className="container section">
        <p className="eyebrow">EXPLORE BY STYLE</p>
        <h1>Tile categories</h1>
        <p className="muted">
          Choose a collection to explore suitable designs.
        </p>

        <div className="category-grid">
          {categories.filter((item) => item !== "All").map((item) => (
            <Link
              className="category-card"
              to={`/categories/${encodeURIComponent(item)}`}
              key={item}
            >
              <span>{item} Tiles</span>
              <span>Explore collection ↗</span>
            </Link>
          ))}
        </div>

        <Outlet />
      </main>
    );
  }

  const selected = categories.find(
    (item) => item.toLowerCase() === category.toLowerCase()
      && item !== "All"
  );

  const results = tiles.filter(
    (tile) => tile.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="container section">
      <p className="eyebrow">
        <Link to="/categories">Categories</Link> / {category}
      </p>

      <h1>{selected ? `${selected} Tiles` : "Category not found"}</h1>

      {selected && (
        <>
          <p className="muted">
            Explore our {selected.toLowerCase()} tile collection.
          </p>

          {results.length ? (
            <div className="product-grid">
              {results.map((tile) => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
          ) : (
            <p>No products are currently available in this category.</p>
          )}
        </>
      )}

      <p><Link to="/categories">← All categories</Link></p>
      <Outlet />
    </main>
  );
}

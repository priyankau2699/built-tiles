
import { useSearchParams } from "react-router-dom";
import { tiles, categories } from "../data/tiles";
import TileCard from "../components/TileCard";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "All";
  const page = Math.max(1, Number(params.get("page")) || 1);
  const perPage = 6;

  const filtered = tiles.filter((tile) => {
    const matchesSearch = tile.name.toLowerCase().includes(
      search.toLowerCase()
    );
    const matchesCategory =
      category === "All" || tile.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / perPage)
  );
  const currentPage = Math.min(page, totalPages);

  const visible = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  function updateParams(key, value) {
    const next = new URLSearchParams(params);

    if (value) next.set(key, value);
    else next.delete(key);

    next.set("page", "1");
    setParams(next);
  }

  return (
    <main className="container section">
      <p className="eyebrow">THE TILE COLLECTION</p>
      <h1>Shop all tiles</h1>
      <p className="muted">
        Explore designs for floors, walls, kitchens and bathrooms.
      </p>

      <div className="shop-toolbar">
        <input
          aria-label="Search tiles"
          placeholder="Search by tile name..."
          value={search}
          onChange={(e) => updateParams("search", e.target.value)}
        />

        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => updateParams("category", e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <p className="muted">{filtered.length} products found</p>

      {visible.length ? (
        <div className="product-grid">
          {visible.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No tiles found</h2>
          <p>Try another search or category.</p>
          <button
            className="primary-button"
            onClick={() => setParams({ page: "1" })}
          >
            Clear filters
          </button>
        </div>
      )}

      {filtered.length > perPage && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => updateParams("page", String(currentPage - 1))}
          >
            ← Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => updateParams("page", String(currentPage + 1))}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
}


import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="container section">
      <p className="eyebrow">OUR STORY</p>
      <h1>Spaces that inspire.<br />Tiles that last.</h1>

      <p className="about-lead">
        BuiltTiles is a sample tiles showroom website designed
        to help customers discover tile styles for their homes
        and commercial spaces.
      </p>

      <div className="about-grid">
        <div className="about-box">
          <span>01</span>
          <h2>Thoughtful designs</h2>
          <p>
            From timeless marble looks to warm wooden finishes,
            explore styles for different interiors.
          </p>
        </div>

        <div className="about-box">
          <span>02</span>
          <h2>Quality choices</h2>
          <p>
            Compare finishes, sizes and colours before choosing
            a tile for your next project.
          </p>
        </div>

        <div className="about-box">
          <span>03</span>
          <h2>Personal guidance</h2>
          <p>
            Contact our showroom team for product availability
            and a personalised quotation.
          </p>
        </div>
      </div>

      <Link className="primary-button" to="/contact">
        Contact our team →
      </Link>
    </main>
  );
}

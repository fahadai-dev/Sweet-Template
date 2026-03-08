import "../styles/products.css";
import { businessData } from "../data/business";

export default function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Special Sweets</h2>
      <div className="grid">
        {businessData.products.map((item, i) => (
          <div
            key={i}
            className="card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-overlay">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

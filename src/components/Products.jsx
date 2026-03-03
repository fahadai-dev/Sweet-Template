import "../styles/products.css";

export default function Products() {
  const items = [
    {
      name: "Pastry",
      img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500",
    },
    {
      name: "Chomchom",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
    },
    {
      name: "Laddu",
      img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500",
    },
    {
      name: "Kaju Barfi",
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
    },
  ];

  return (
    <section id="products" className="products">
      <h2>Our Special Sweets</h2>
      <div className="grid">
        {items.map((item, i) => (
          <div
            key={i}
            className="card"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>{item.name}</h3>
            <p>Premium quality & freshly made.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import "../css/products.css";

function Products() {
  const productList = [
    {
      name: "Lunar Rover",
      description: "Explore the Moon’s surface with our advanced lunar vehicle.",
    },
    {
      name: "Space Suit",
      description: "Engineered for comfort and safety in zero-gravity environments.",
    },
    {
      name: "Satellite Kit",
      description: "Build and launch your own educational satellite model.",
    },
  ];

  return (
    <section className="products">
      <h2>PRODUCT SECTION</h2>
      <div className="product-list">
        {productList.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

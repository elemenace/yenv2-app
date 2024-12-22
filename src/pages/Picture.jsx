import React, { useEffect, useState } from "react";

const Pictures = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const lastSpaceIndex = text.substring(0, maxLength).lastIndexOf(" ");
      return (
        text.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
        "..."
      );
    }
    return text;
  };

  if (loading) {
    return <div className="text-center text-2xl py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="mb-4 hover:shadow-xl hover:shadow-yellow-500 shadow-lg p-6 border border-gray-300 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 m-5"
          >
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src={product.image}
              alt={product.name}
            />
            <div className="text-xl font-semibold mt-4">{product.name}</div>
            <div className="text-gray-500 text-sm">Price: {product.price}</div>
            <div className="text-gray-500 text-sm truncate">
              {truncateText(product.title, 50)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;

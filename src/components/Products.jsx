import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFiler] = useState(data);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    setData(await response.json());
  };
  console.log(data);
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Products</div>;
}

export default Products;

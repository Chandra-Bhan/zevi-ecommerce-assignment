import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFiler] = useState(data);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    setData(await response.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  return <div>Products</div>;
}

export default Products;

import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Select from "react-select";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: 0,
    label: "select",
  });
  const [options, setOptions] = useState([]);
  const checkedValues = useRef([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const produc = await response.json();
      setFilter(produc);
      setData(produc);
      console.log(produc);
      const optdata = produc.map((productdata) => ({
        value: productdata.id,
        label: productdata.title.substring(0, 12),
      }));
      setOptions(optdata);
      setLoading(false);
    } catch (error) {
      alert(error.message, "try again");
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    console.log(value, checked);
    if (checked) {
      checkedValues.current.push(value);
    } else {
      const index = checkedValues.current.findIndex(
        (checkvalue) => checkvalue == value
      );
      checkedValues.current.splice(index, 1);
    }

    console.log(checkedValues.current);
    const filteringbyprice = data.filter((produc) => {
      for (let i = 0; i < checkedValues.current.length; i++) {
        if (checkedValues.current[i] == "under-15") {
          if (produc.price <= 15) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "16-to-99") {
          if (produc.price >= 16 && produc.price <= 99) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "100-to-1000") {
          if (produc.price >= 100 && produc.price <= 1000) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "rating-5") {
          if (produc.rating.rate == 5) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "rating-4") {
          if (produc.rating.rate >= 4 && produc.rating.rate < 5) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "rating-3") {
          if (produc.rating.rate >= 3 && produc.rating.rate < 4) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "rating-2") {
          if (produc.rating.rate >= 2 && produc.rating.rate < 3) {
            return produc;
          }
        }
        if (checkedValues.current[i] == "rating-1") {
          if (
            produc.rating.rate >= 1 &&
            produc.rating.rate < 2 &&
            produc.rating.rate < 1
          ) {
            return produc;
          }
        }
      }
    });
    setFilter(filteringbyprice);
    console.log("Hello", filteringbyprice);
    if (checkedValues.current.length == 0) {
      setFilter(data);
      console.log("length 0");
    }
  };

  useEffect(() => {
    if (data.length != 0) {
      const filteredData = data.find((prod) => prod.id == selectedOption.value);
      if (filteredData) {
        setFilter([filteredData]);
      }
    }
  }, [selectedOption]);

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
  console.log(filter);
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="mb-5 w-50">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className="main-content-container">
          <div className="buttons d-flex flex-column justify-content-center mb-5 pb-5">
            <h6>CATEGORIES</h6>
            <button
              className="btn btn-outline-dark me-2 mt-3"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2 mt-3"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2 mt-3"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2 mt-3"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2 mt-3"
              onClick={() => filterProduct("electronics")}
            >
              Electronic
            </button>

            {/* Price Range section */}

            <div className="mt-5">
              <h6>PRICE RANGE</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="under-15"
                  id="flexCheckDefault"
                  checked={checkedValues.current.includes("under-15")}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Under 15
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="16-to-99"
                  checked={checkedValues.current.includes("16-to-99")}
                  id="flexCheckChecked1"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked1">
                  Under 16 to 99
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="100-to-1000"
                  id="flexCheckChecked2"
                  checked={checkedValues.current.includes("100-to-1000")}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked2">
                  Under 100 to 1000
                </label>
              </div>
            </div>

            {/* Filter with Rating */}

            <div className="mt-5">
              <h6>Ratings</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rating-5"
                  id="flexCheckDefault"
                  checked={checkedValues.current.includes("rating-5")}
                  onChange={handleCheckboxChange}
                />
                <StarRatings
                  rating={5}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#ffcc33"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rating-4"
                  checked={checkedValues.current.includes("rating-4")}
                  id="flexCheckChecked1"
                  onChange={handleCheckboxChange}
                />
                <StarRatings
                  rating={4}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#ffcc33"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rating-3"
                  id="flexCheckChecked2"
                  checked={checkedValues.current.includes("rating-3")}
                  onChange={handleCheckboxChange}
                />
                <StarRatings
                  rating={3}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#ffcc33"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rating-2"
                  id="flexCheckChecked2"
                  checked={checkedValues.current.includes("rating-2")}
                  onChange={handleCheckboxChange}
                />
                <StarRatings
                  rating={2}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#ffcc33"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rating-1"
                  id="flexCheckChecked2"
                  checked={checkedValues.current.includes("rating-1")}
                  onChange={handleCheckboxChange}
                />
                <StarRatings
                  rating={1}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#ffcc33"
                />
              </div>
            </div>
          </div>

          <div className="all-card-cotainer">
            {filter.map((product) => {
              return (
                <>
                  <div
                    className="col-md-3 mb-4  cart-container-div"
                    style={{ width: "300px" }}
                    key={product.id}
                  >
                    <div className="card h-100 text-center p-4">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        height={250}
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {product.title.substring(0, 12)}
                        </h5>
                        <p>${product.price}</p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <StarRatings
                            rating={product.rating.rate}
                            starDimension="20px"
                            starSpacing="5px"
                            starRatedColor="#ffcc33"
                          />{" "}
                          <span>({product.rating.count})</span>
                        </div>
                        <br />
                        <br />
                        <NavLink
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark buy-now-btn"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ backgroundColor: "#ecf0f3" }}>
      <div className="container  py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;

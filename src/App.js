import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import ProductItem from "./components/ProductItem";
import ProductPost from "./components/ProductPost";
import products from "./components/data/products";
import AppSearch from "./components/appSearch";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onProductOpenClick(theProduct) {
    setSelectedProduct(theProduct);
  }

  function onProductCloseClick() {
    setSelectedProduct(null);
  }

  const filteredProducts = products.filter((product) => {
    return product.title.includes(searchText);
  });

  const productElements = filteredProducts.map((product, index) => {
    return (
      <ProductItem
        key={index}
        product={product}
        onProductClick={onProductOpenClick}
      />
    );
  });

  let productPost = null;
  if (!!selectedProduct) {
    productPost = (
      <ProductPost product={selectedProduct} onBgClick={onProductCloseClick} />
    );
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{productElements}</div>
        </div>
      </section>
      {productPost}
    </div>
  );
}

export default App;

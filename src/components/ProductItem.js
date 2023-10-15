import "./ProductItem.css";
function ProductItem(props) {
  const { product, onProductClick } = props;
  return (
    <div className="product-item">
      <img
        src={product.thumbnaiUrl}
        onClick={() => {
          onProductClick(product);
        }}
      />
      <h4>{product.title}</h4>
    </div>
  );
}
export default ProductItem;

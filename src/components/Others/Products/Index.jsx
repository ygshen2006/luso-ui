import TopNav from "../Head/TopNav";
import productImage from "../../../images/covers/5.png";
import TopBanner from "../Banner/TopBanner";
import ProductsComponent from "./Products";

const Products = () => {
  return (
    <>
      <div className="header">
        <TopNav activeIndex="products" />
      </div>

      <div className="content">
        <section className="py-5 shadow-sm index-forward">
          <TopBanner
            pic={productImage}
            currentPageText="Save cost, experience the green environmental protection"
          />
          <ProductsComponent />
        </section>
      </div>
    </>
  );
};

export default Products;

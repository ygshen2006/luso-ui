import Award from "./Award/Index";
// import Banner from './Banner/BannerLarge';

import BannerWithAction from "./Banner/BannerWithAction";
import TopNav from "./Head/TopNav";
import ProductsComponent from "./Products/Products";
import pic1 from "../../images/covers/1.jpeg";
import pic2 from "../../images/covers/2.jpeg";
import pic3 from "../../images/covers/3.jpeg";

import Introduction from "./About/Introduction";
import CompanyVideo from "./About/Video";

import CustomersComponent from "./Customers/Customers";
import customers from "../../Data/Customers";
import Banner from "./Banner/BannerLarge";
import PostCarousel from "./Post/PostCarousel";
const HomeComponent = () => {
  return (
    <>
      <TopNav />
      <PostCarousel />
      <Banner />

      <Award />
      <ProductsComponent />
      <BannerWithAction bgpic={pic1} />
      <Introduction bgpic={pic2} />
      <CompanyVideo pic={pic3} />
      <CustomersComponent items={customers} />
    </>
  );
};

export default HomeComponent;

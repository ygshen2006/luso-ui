import TopBanner from '../Banner/TopBanner';
import TopNav from '../Head/TopNav';
import contactImage from '../../../images/covers/6.png';
import CustomersComponent from './Customers';
import customers from '../../../Data/Customers';
const Customers = () => {
  return (
    <>
      <div className="header">
        <TopNav activeIndex="customers" />
      </div>

      <div className="content">
        <section className="py-5 shadow-sm index-forward">
          <TopBanner pic={contactImage} currentPageText="长期合作伙伴" />
          <CustomersComponent items={customers} />
        </section>
      </div>
    </>
  );
};

export default Customers;

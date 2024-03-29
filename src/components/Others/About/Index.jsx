import TopBanner from '../Banner/TopBanner';
import TopNav from '../Head/TopNav';
import contactImage from '../../../images/covers/4.jpeg';
import ServicesComponent from './Services';
import Award from '../Award/Index';

const AboutComponent = () => {
  return (
    <>
      <div className="header">
        <TopNav activeIndex="about" />
      </div>

      <div className="content">
        <section className="py-5 shadow-sm index-forward">
          <TopBanner pic={contactImage} currentPageText="关于我们" />
          <ServicesComponent />
          <Award />
        </section>
      </div>
    </>
  );
};

export default AboutComponent;

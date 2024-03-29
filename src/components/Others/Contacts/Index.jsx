// import ContactResult from '../components/Contact/Result'
import ChatProvider from '../../../Provider/ChatProvider';
import ChatComponent from '../../Ebay/Chat';
// import BannerWithNav from '../Banner/BannerWithNav';
import TopNav from '../Head/TopNav';
const ContactsComponent = () => {
  return (
    <>
      <div className="header">
        <TopNav activeIndex="contact" />
      </div>
      <section
        // style={{ marginTop: '-50px' }}
        className="py-5 shadow-sm index-forward"
      >
        {/* <BannerWithNav /> */}
        <div className="container" style={{ paddingTop: '0px' }}>
          <ChatProvider>
            <ChatComponent />
          </ChatProvider>
        </div>
      </section>
    </>
  );
};

export default ContactsComponent;

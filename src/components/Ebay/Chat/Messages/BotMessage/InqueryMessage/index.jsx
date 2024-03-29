import './style.css';

// import { EbayCtaButton } from '@ebay/ui-core-react/ebay-cta-button';
// import { EbayButton } from '@ebay/ui-core-react/ebay-button';
import '@ebay/skin/button';
import '@ebay/skin/icon';
import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';

const InquireMessage = ({ message, next }) => {
  return (
    <p>
      <div>
        <span style={{ marginRight: '50px' }}>{message}</span>
      </div>
      <div style={{ marginTop: '5px' }}>
        <span>
          <i style={{ textDecoration: 'underline', color: '' }}>Yes</i>
          &nbsp;&nbsp;
          <EbayIcon name="face-neutral24" />
        </span>

        <span style={{ marginLeft: '40px' }} onClick={next}>
          <i style={{ textDecoration: 'underline' }}>No, that is it for now</i>
          <EbayIcon name="on-the-way24" />
        </span>
      </div>
    </p>
  );
};

export default InquireMessage;

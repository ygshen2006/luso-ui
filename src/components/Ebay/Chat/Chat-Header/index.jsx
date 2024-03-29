import './style.css';
import { EbaySvg } from '@ebay/ui-core-react/ebay-svg';
// import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';
import '@ebay/skin/icon';
import GithubUser from '../../ChatLogin/GithubUser';
import { useChats } from '../../../../Provider/ChatProvider';
import { useEffect } from 'react';

const ChatHeader = () => {
  const { login } = useChats();

  useEffect(() => {
    console.log(login);
  }, [login]);
  return (
    <>
      <div className="chat-header">
        <div className="chat-recipient">{/* <h3>luso.ai</h3> */}</div>
        <div className="chat-menu">
          <div style={{ float: 'left' }}>
            <GithubUser login={login} />
          </div>
        </div>
      </div>

      <EbaySvg />
    </>
  );
};

export default ChatHeader;

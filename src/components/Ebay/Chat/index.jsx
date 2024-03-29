// import { EbayTextbox } from '@ebay/ui-core-react/ebay-textbox'
import { EbaySvg } from '@ebay/ui-core-react/ebay-svg';
import '@ebay/skin/icon';
import './style.css';
import ChatHeader from './Chat-Header';
import ChatBody from './Chat-Body';
import ChatMessaging from './Chat-Messaging';
import { useEffect, useState } from 'react';
import { useChats } from '../../../Provider/ChatProvider';
var ChatComponent = () => {
  const { data } = useChats();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(data);
  }, [data]);
  return (
    <>
      <div className="chat-window">
        <ChatHeader />
        <ChatBody messages={messages} />
        <ChatMessaging />
      </div>
      <EbaySvg />
    </>
  );
};
export default ChatComponent;

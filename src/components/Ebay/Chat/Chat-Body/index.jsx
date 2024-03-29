import './style.css';
import { EbaySvg } from '@ebay/ui-core-react/ebay-svg';
import '@ebay/skin/icon';
import BotMessage from '../Messages/BotMessage';
import UserMessage from '../Messages/User';

const ChatBody = ({ messages }) => {
  return (
    <>
      <div className="chat-messages">
        {messages.map((message) => {
          if (message.type === 'bot') {
            return (
              <div key={message.seq} className="chat-message">
                <BotMessage {...message} />
              </div>
            );
          } else {
            return (
              <div key={message.seq} className="chat-message">
                <UserMessage {...message} />
              </div>
            );
          }
        })}
      </div>
      <EbaySvg />
    </>
  );
};

export default ChatBody;

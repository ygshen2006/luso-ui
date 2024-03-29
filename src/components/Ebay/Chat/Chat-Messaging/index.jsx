import './style.css';
import { EbaySvg } from '@ebay/ui-core-react/ebay-svg';
import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';
import '@ebay/skin/icon';
import { useChats } from '../../../../Provider/ChatProvider';

const ChatMessaging = () => {
  const { data, onAddNewMessage, onAddNewMessages } = useChats();
  const addNewNessage = (message) => {
    onAddNewMessage({
      message,
      seq: data.length + 1,
      type: 'user',
    });

    if (data.length == 1) {
      setTimeout(() => {
        onAddNewMessages([
          {
            message: 'Greetings',
            seq: 3,
            type: 'bot',
          },
        ]);
      }, 1000);
    }

    // clear the data and resend the essentials
  };

  var handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addNewNessage(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <>
      <div className="chat-form">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          className="chat-input"
          id="user-input"
          placeholder="Ask me anything..."
        />
        <label htmlFor="voice-input" className="voice-upload">
          <EbayIcon name="microphone16" />
        </label>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          id="photo-input"
          className="photo-input"
        />
        <label htmlFor="photo-input" className="photo-upload">
          <EbayIcon name="camera16" />
        </label>
      </div>
      <EbaySvg />
    </>
  );
};

export default ChatMessaging;

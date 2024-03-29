import { useState } from 'react';
import './style.css';

import { EbayButton } from '@ebay/ui-core-react/ebay-button';
// import skin for ebay button
import '@ebay/skin/button';
// import { useChats } from '../../../../../../Provider/ChatProvider';
const EsentialMessage = ({ message, keyName, esentials, readyFn }) => {
  const [buttons, setButtons] = useState(
    esentials.map(() => {
      return { priority: 'tertiary' };
    }),
  );

  const handleClick = (index) => {
    const newButtons = [...buttons];
    newButtons[index].priority =
      newButtons[index].priority == 'primary' ? 'tertiary' : 'primary';
    setButtons(newButtons);
    readyFn(index, keyName);
  };
  return (
    <>
      <p>{message}</p>
      <div className="message">
        {esentials.map((esential, i) => (
          <EbayButton
            key={i}
            onClick={() => handleClick(i)}
            priority={buttons[i].priority}
            style={{ margin: '3px' }}
          >
            {esential}
          </EbayButton>
        ))}
      </div>
    </>
  );
};

export default EsentialMessage;

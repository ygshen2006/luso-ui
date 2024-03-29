import "./style.css";
import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";
// import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';
import "@ebay/skin/icon";

const UserMessage = ({ message }) => {
  return (
    <>
      <div className="user-message">
        <div>{message}</div>
      </div>
      <EbaySvg />
    </>
  );
};

export default UserMessage;

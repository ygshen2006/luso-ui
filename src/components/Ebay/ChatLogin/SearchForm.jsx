// create a function component
// import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';
import { EbayTextbox } from "@ebay/ui-core-react/ebay-textbox";
import "@ebay/skin/icon";
import "@ebay/skin/textbox";

import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
import { useChats } from "../../../Provider/ChatProvider";
import { useState } from "react";
const SearchForm = ({ afterLogin }) => {
  const { onLogin } = useChats();
  const [userName, setUserName] = useState();
  const search = () => {
    onLogin(userName);
    afterLogin(userName);
  };

  return (
    <>
      <div>
        <EbayTextbox
          placeholder="test"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <EbayButton onClick={() => search()}>
          登录
          {/* <EbayIcon name="arrowRight16" /> */}
        </EbayButton>
      </div>
      <EbaySvg />
    </>
  );
};
export default SearchForm;

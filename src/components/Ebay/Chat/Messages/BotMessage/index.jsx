import { useEffect, useState } from "react";
import "./style.css";
import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";
import { EbayIcon } from "@ebay/ui-core-react/ebay-icon";
import "@ebay/skin/icon";
// import { DatePicker } from 'antd';
import { useChats } from "../../../../../Provider/ChatProvider";
import Welcome from "./Welcome";
import PureMessage from "./PureMessage";
import { get } from "../../../../../utils/api";
import { ChatConstants, USE_MOCK } from "../../../../../utils/constants";
import EsentialMessage from "./EsentialMessage";
import InquireMessage from "./InqueryMessage";
import ResultMessage from "./ResultMessage";
import LoginMessage from "./LoginMessage";
// const { RangePicker } = DatePicker;

const BotMessage = ({ message, keyName, seq, type, esentials }) => {
  var { data, onAddNewMessage, onAddNewMessages } = useChats();
  var useMock;
  useEffect(() => {
    // Code to run after the component has mounted
    const params = new URLSearchParams(window.location.search);
    useMock = params.get(USE_MOCK);
  }, []);

  var [content, setContent] = useState({});
  useEffect(() => {
    if (content && Object.keys(content).length > 0) {
      onAddNewMessage(content);
    }
  }, [content]);

  const addNewMessage = async (message) => {
    setContent({
      message,
      seq: 2,
      type: "user",
    });

    // send birthday to api
    var nextResponse = await get(`${ChatConstants.BIRTHDAY_URI}`, [
      {
        key: ChatConstants.BIRTHDAY_PARAM_KEY,
        value: message.replace(/-/g, "/"),
      },
      { key: USE_MOCK, value: useMock },
    ]);

    setContent({
      message: nextResponse.message,
      chatId: nextResponse.chatId,
      seq: 3,
      type: "bot",
    });

    setTimeout(() => {
      setContent({
        message: nextResponse.question,
        chatId: nextResponse.chatId,
        seq: 4,
        type: "bot",
        selected: [],
        esentials: nextResponse.data.answers,
      });
    }, 2000);
  };

  // usestate for esentials
  const readyFn = (index) => {
    const hasNext = data.some((item) => item.seq === 5);
    if (!hasNext) {
      setContent({
        message: "Do you want to add more options?",
        seq: 5,
        type: "bot",
      });
    }

    data.find((item) => item.seq === 4).selected.push(index);
  };

  const continueEsentialDrill = async () => {
    var step = data.find((item) => item.seq === 4);
    var selectedEsentials = step.selected;

    var essentialNames = [];
    step.esentials.forEach((item, index) => {
      if (selectedEsentials.includes(index)) {
        essentialNames.push(item);
      }
    });

    // send api call to get the next question
    var nextResponse = await get(`${ChatConstants.DRILL_URL}`, [
      { key: ChatConstants.DRILL_PARAM_KEY, value: essentialNames.join(",") },
      { key: "chatId", value: step.chatId },
      { key: ChatConstants.USE_MOCK, value: useMock },
    ]);

    var targets = nextResponse.data.map((item) => {
      return {
        message: item.question,
        seq: 6,
        keyName: item.key,
        type: "bot",
        esentials: item.answers,
        selected: [],
      };
    });

    onAddNewMessages([...data, ...targets]);
  };

  const readyFnDrill = (index, keyName) => {
    const hasNext = data.some((item) => item.seq === 7);
    if (!hasNext) {
      setContent({
        message:
          "Are there any other types of products you’re interested in today?",
        seq: 7,
        type: "bot",
      });
    }

    data
      .find((item) => item.seq === 6 && item.keyName === keyName)
      .selected.push(index);
  };

  const finishDrill = () => {
    var final = [];
    // clean the data
    data
      .filter((item) => item.seq === 6 && item.keyName)
      .map((current) => {
        // current.keyName = current.keyName;
        current.selected.map((v) => {
          var c = final.find((item) => item.key === current.keyName);
          if (!c) {
            final.push({ key: current.keyName, value: [current.esentials[v]] });
          } else {
            c.value.push(current.esentials[v]);
          }
          return c;
        });
      });

    // send api call to get the next question
    // currently we will consume a result

    setContent({
      message: `<div>
        <div>Based on your preferences we have curated a selection of pre-loved products easily delivered or in your area. </div>
        <div style="margin: 10px"><a href="http://localhost:8099/build/target.html">Shop now!</a></div>
        <div>
        Thanks for thinking pre-loved!
        </div>
        </div>`,
      seq: 8,
      type: "bot",
    });
  };

  const afterLogin = (userName) => {
    setContent({
      message: `Hey ${userName}, Please enter the due/birth date of your little one to receive tailored buying & selling suggestions for pre-loved children's products.`,
      seq: 1,
      type: "bot",
    });
  };

  return (
    <>
      <div className="bot-message">
        <div className="ai-icon">
          <EbayIcon name="aiSpectrumFilled24Colored" />
        </div>
        {/* Login */}
        {seq === 0 ? (
          <LoginMessage text={message} afterLogin={afterLogin} />
        ) : null}

        {/* Birthday */}
        {seq === 1 ? (
          <Welcome
            message={message}
            seq={seq}
            type={type}
            addNewMessage={addNewMessage}
          />
        ) : null}
        {/* Greeting */}
        {seq === 3 ? <PureMessage message={message} /> : null}
        {/* Esential categories */}
        {seq === 4 ? (
          <EsentialMessage
            message={message}
            esentials={esentials}
            readyFn={readyFn}
          />
        ) : null}
        {/* Inquery */}
        {seq === 5 ? (
          <InquireMessage message={message} next={continueEsentialDrill} />
        ) : null}
        {/* Drill */}
        {seq === 6 ? (
          <EsentialMessage
            message={message}
            keyName={keyName}
            esentials={esentials}
            readyFn={readyFnDrill}
          />
        ) : null}

        {/* Inquery */}
        {seq === 7 ? (
          <InquireMessage message={message} next={finishDrill} />
        ) : null}

        {/* Result */}
        {seq === 8 ? <ResultMessage message={message} /> : null}
      </div>
      <EbaySvg />
    </>
  );
};

export default BotMessage;

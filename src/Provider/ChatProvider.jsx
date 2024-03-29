import { createContext, useContext, useState } from "react";
import messages from "../Data/Chat";

const ChatContext = createContext();
export const useChats = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const [data, setChats] = useState(messages);

  const onAddNewMessage = ({
    message,
    chatId,
    seq,
    type,
    esentials,
    selected,
  }) => {
    setChats([
      ...data,
      {
        chatId,
        seq,
        message,
        type,
        esentials,
        selected,
      },
    ]);
  };
  const onAddNewMessages = (messages) => {
    setChats(messages);
  };

  const clearMessages = () => {
    setChats([]);
  };

  const [login, setLogin] = useState("");
  const onLogin = (login) => {
    setLogin(login);
  };

  return (
    <ChatContext.Provider
      value={{
        data,
        onAddNewMessage,
        onAddNewMessages,
        clearMessages,
        login,
        onLogin,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

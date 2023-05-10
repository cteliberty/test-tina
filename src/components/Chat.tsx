import * as React from "react"
import ChatMessage, {ChatMessageProps} from "./ChatMessage";

export interface ChatProps {
  chat: [ChatMessageProps],
}

const Chat: React.FC<ChatProps> = (props) => {
  const {chat} = props;

  return (
    <>
      {chat.map((message) => (
        <ChatMessage {...message} />
      ))}
    </>
  );
}

export default Chat

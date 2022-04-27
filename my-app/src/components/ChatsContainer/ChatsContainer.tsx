import ChatArea from "components/ChatArea/ChatArea";
import Chats from "components/Chats/Chats";
import { emptyUser } from "mocks/usersMock";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "store/activeUserSlice/activeUserSlice";
import { UserType } from "types/users";
import classes from "./ChatsContainer.module.scss";

function ChatsContainer(): JSX.Element {
  const [userChat, setUserChat] = useState<UserType>(emptyUser);

  return (
    <div className={classes.container}>
      <Chats setUserChat={setUserChat} userChat={userChat} />
      <ChatArea userChat={userChat} />
    </div>
  );
}

export default ChatsContainer;

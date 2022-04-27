import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "store/activeUserSlice/activeUserSlice";
import { UserType } from "types/users";
import classes from "./ChatItem.module.scss";
import cn from "classnames";
import { getMessages } from "store/messageSlice/selectors";
import dayjs from "dayjs";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";

type ChatProps = {
  user: UserType;
  setUserChat: (arg: UserType) => void;
  userChat: UserType;
};

function ChatItem({ user, setUserChat, userChat }: ChatProps): JSX.Element {
  const mainCn = cn(classes.chat_list_item, classes.chat_list_item_active);
  const messages = useSelector(getMessages);
  const chatRoomMessages = messages.filter(
    (message) => message.userMessage.user.id === user.id
  );
  const lastMessage =
    chatRoomMessages.length > 0 &&
    chatRoomMessages[chatRoomMessages.length - 1];

  const lastComment = lastMessage
    ? lastMessage.userMessage.comment.toString().slice(0, 25) + "..."
    : "";

  const lastCommentDate = lastMessage
    ? dayjs(lastMessage.userMessage.date).format("D MMMM YYYY")
    : "";

  const { name, avatar, id } = user;
  const dispatch = useDispatch();

  return (
    <li
      className={userChat.id === id ? mainCn : classes.chat_list_item}
      onClick={() => {
        setUserChat(user);
        dispatch(setActiveUser(user));
      }}
    >
      <div className="avatar_container">
        <CheckCircleOutlined className="online" />
        <img
          className={classes.chat_list_avatar}
          src={avatar}
          width="50"
          height="50"
          alt=""
        />
      </div>
      <div className={classes.chat_list_user}>
        <p className={classes.chat_list_user_title}>{name}</p>
        <p className={classes.chat_list_user_message}>{lastComment}</p>
      </div>
      <p className={classes.chat_list_date}>{lastCommentDate}</p>
    </li>
  );
}

export default ChatItem;

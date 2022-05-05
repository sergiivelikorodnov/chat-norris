import { useEffect, useRef } from "react";
import classes from "./ChatArea.module.scss";
import { KeyboardEvent } from "react";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import { UserType } from "types/users";
import ChatMessages from "components/ChatMessage/ChatMessage";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "store/messageSlice/messagesSlice";
import { getMessages } from "store/messageSlice/selectors";
import { myUser } from "mocks/usersMock";
import { createAPI } from "service/api";
import { ChuckNorrisType } from "types/messages";
import { chuckReply } from "consts";
import { toast } from "react-toastify";
import { randomTimeInterval } from "service/utils";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";

type ChatProps = {
  userChat: UserType;
};

function ChatArea({ userChat }: ChatProps): JSX.Element {
  const textInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const roomMessages = useSelector(getMessages);

  const chatContainer = useRef<HTMLDivElement>(null);

  const scrollToMyRef = () => {
    if (null !== chatContainer.current) {
      const scroll =
        chatContainer.current.scrollHeight -
        chatContainer.current.clientHeight +
        70;

      setTimeout(() => {
        if (null !== chatContainer.current) {
          chatContainer.current.scrollTo(0, scroll);
        }
      }, 100);
    }
  };

  useEffect(() => {
    scrollToMyRef();
  }, [userChat]);

  const api = createAPI();

  const chuckNorrisCalls = async (): Promise<void> => {
    await api
      .get<ChuckNorrisType>(chuckReply)
      .then(({ data }) => {
        const comment = data.value;
        setTimeout(() => {
          dispatch(addMessage({ id: userChat.id, comment, user: userChat }));
          scrollToMyRef();
        }, randomTimeInterval(3000, 5000));
      })
      .catch((err) => toast.success(err));
  };

  function handleClick(): void {
    if (textInput && textInput.current && textInput.current.value !== "") {
      const comment = textInput.current.value;
      dispatch(addMessage({ id: userChat.id, comment, user: myUser }));
      textInput.current.value = "";
      scrollToMyRef();
      chuckNorrisCalls();
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      {userChat.id === 0 ? (
        <>
          <h1>Start Chat</h1>
        </>
      ) : (
        <div className={classes.container}>
          <div className={classes.top_container}>
            <div className="avatar_container">
              <CheckCircleOutlined className="online" />
              <img
                className={classes.avatar}
                src={userChat.avatar}
                width="50"
                height="50"
                alt=""
              />
            </div>
            <p className={classes.title}>{userChat.name}</p>
          </div>
          <div className={classes.middle_container} ref={chatContainer}>
            <ul className={classes.messages_list}>
              {roomMessages
                .filter(
                  (message) => message.userMessage.chatRoom === userChat.id
                )
                .map((message) => (
                  <ChatMessages key={nanoid()} message={message} />
                ))}
            </ul>
          </div>
          <div className={classes.bottom_container}>
            <button className={classes.send_icon} onClick={handleClick}>
              <SendOutlined />
            </button>
            <input
              className={classes.form__input}
              id="form-search"
              type="search"
              name="form-search"
              placeholder="Type your message"
              required
              ref={textInput}
              defaultValue=""
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatArea;

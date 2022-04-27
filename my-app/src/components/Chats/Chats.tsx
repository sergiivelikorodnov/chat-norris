import { useRef, useState } from "react";
import classes from "./Chats.module.scss";
import { KeyboardEvent } from "react";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import ChatItem from "components/ChatItem/ChatItem";
import { emptyUser, usersMock } from "mocks/usersMock";
import { UserType } from "types/users";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";
import { motion } from "framer-motion";
import { backDrop } from "consts";

type userChatsProps = {
  setUserChat: (arg: UserType) => void;
  userChat: UserType;
};

function Chats({ setUserChat, userChat }: userChatsProps): JSX.Element {
  const textInput = useRef<HTMLInputElement>(null);
  const [searchUsers, setSearchUsers] = useState(usersMock);

  function handleClick(): void {
    if (textInput && textInput.current) {
      const value = textInput.current.value.toLowerCase();
      const filteredUsers = usersMock.filter((user) =>
        user.name.toLowerCase().includes(value)
      );
      setSearchUsers(filteredUsers);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.top_container}>
        <div className="avatar_container">
          <CheckCircleOutlined className="online" />
          <img
            className={classes.avatar}
            src="img/avatar.jpg"
            width="50"
            height="50"
            alt=""
          />
        </div>
        <div className={classes.form__fieldset}>
          <button className={classes.search_icon} onClick={handleClick}>
            <SearchOutlined />
          </button>
          <input
            className={classes.form__input}
            id="form-search"
            type="search"
            name="form-search"
            placeholder="Search or start new chat"
            required
            ref={textInput}
            defaultValue=""
            onInput={handleClick}
          />
        </div>
      </div>
      <div className={classes.chats_container}>
        <h1 className={classes.chats_title}>Chats</h1>
        <motion.ul
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {searchUsers.map((user) => (
            <ChatItem
              key={user.id}
              user={user}
              setUserChat={setUserChat}
              userChat={userChat}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Chats;
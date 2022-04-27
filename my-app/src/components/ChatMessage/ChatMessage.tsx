import { useRef } from "react";
import classes from "./ChatMessage.module.scss";
import { KeyboardEvent } from "react";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import { UserType } from "types/users";
import { MessageType } from "types/state";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { backDrop } from "consts";

type MessageProps = {
  message: MessageType;
};

function ChatMessages({ message }: MessageProps): JSX.Element {
  const { user, comment, date } = message.userMessage;

  const myDate = dayjs(date).format("D/MM/YYYY, HH:mm A");

  return (
    <motion.li
      variants={backDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={
        user.id === 48 ? classes.message_reply_my : classes.message_reply
      }
    >
      <div className={classes.comment}>
        <img
          className={classes.avatar}
          src={user.avatar}
          width="50"
          height="50"
          alt={user.name}
        />
        <p className={classes.message}>{comment}</p>
      </div>
      <span className={classes.date}>{myDate}</span>
    </motion.li>
  );
}

export default ChatMessages;

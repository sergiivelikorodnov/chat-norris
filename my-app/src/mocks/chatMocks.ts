import { myUser, usersMock } from "mocks/usersMock";
import { ChatRoomStateType } from "types/state";

export const chatsMock: ChatRoomStateType = [
  {
    userMessage: {
      chatRoom: 1,
      comment: "Hello",
      date: new Date(),
      user: usersMock[0],
    },
  },
  {
    userMessage: {
      chatRoom: 1,
      comment: "How are you?",
      date: new Date(),
      user: myUser,
    },
  },
  {
    userMessage: {
      chatRoom: 1,
      comment: "Fine",
      date: new Date(),
      user: usersMock[0],
    },
  },
  {
    userMessage: {
      chatRoom: 1,
      comment: "Hello, dude",
      date: new Date(),
      user: usersMock[0],
    },
  },
  {
    userMessage: {
      chatRoom: 1,
      comment: "How are going?",
      date: new Date(),
      user: myUser,
    },
  },
  {
    userMessage: {
      chatRoom: 1,
      comment: "Awesome",
      date: new Date(),
      user: usersMock[0],
    },
  },
];

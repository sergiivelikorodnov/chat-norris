import { UserType } from "./users";
import { RootState } from "../store/rootReducer";

export type ActiveUserStateType = {
  activeUser: UserType;
};

export type MessageType = {
  userMessage: {
    chatRoom: number;
    comment: string;
    date: Date;
    user: UserType;
  };
};

export type ChatRoomStateType = MessageType[];

export type State = RootState;

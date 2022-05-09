import { UserType } from "types/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatRoomStateType, MessageType } from "types/state";
import dayjs from "dayjs";

const initialState: ChatRoomStateType = [];

type Message = {
  id: number;
  comment: string;
  user: UserType;
};

const messagesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.push({
        userMessage: {
          chatRoom: action.payload.id,
          comment: action.payload.comment,
          date: new Date(),
          user: action.payload.user,
        },
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;

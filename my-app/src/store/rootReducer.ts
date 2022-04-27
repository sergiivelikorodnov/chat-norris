import { combineReducers } from "redux";
import activeUserSlice from "./activeUserSlice/activeUserSlice";
import messagesSlice from "./messageSlice/messagesSlice";

export enum StoreNameSpace {
  ActiveUser = "ACTIVE_USER",
  Messages = "MESSAGES",
}

export const rootReducer = combineReducers({
  [StoreNameSpace.ActiveUser]: activeUserSlice,
  [StoreNameSpace.Messages]: messagesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

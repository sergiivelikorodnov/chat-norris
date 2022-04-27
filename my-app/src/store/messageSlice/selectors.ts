import { StoreNameSpace } from "../rootReducer";
import { State } from "../../types/state";

export const getMessages = (state: State) => state[StoreNameSpace.Messages];

import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT } from "../utils/constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVECHAT_COUNT, 2);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

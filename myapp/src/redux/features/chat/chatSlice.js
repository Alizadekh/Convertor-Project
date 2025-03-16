import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatStarted: false,
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    startChat: (state, action) => {
      state.isChatStarted = true;
      // İlk mesaj
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: "user",
      });
      // Botdan gelen ilk cavab kimi
      state.messages.push({
        id: Date.now() + 1,
        text: "Hi there, how can I help you?",
        sender: "bot",
      });
    },
    sendMessage: (state, action) => {
      // Gonderilen msj
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: "user",
      });
      // Botun cavavi - APiden gelecey
      state.messages.push({
        id: Date.now() + 1,
        text: "This data would come from Backend",
        sender: "bot",
      });
    },
    resetChat: (state) => {
      state.isChatStarted = false;
      state.messages = [];
    },
  },
});

export const { startChat, sendMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;

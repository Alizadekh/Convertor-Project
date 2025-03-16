import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import themeReducer from "../features/theme/themeSlice";
import chatReducer from "../features/chat/chatSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    chat: chatReducer,
    auth: authReducer,
  },
});

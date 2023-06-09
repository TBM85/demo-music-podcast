import { configureStore } from "@reduxjs/toolkit";
import podcastsReducer from "./features/podcastsSlice";
import episodesReducer from "./features/episodesSlice";

export const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
    episodes: episodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

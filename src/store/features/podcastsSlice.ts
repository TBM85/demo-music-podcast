import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getLastUpdatedDate, isDiffMoreThanDay } from "../../utils/utils";

// Retrieve the data stored in localStorage if the podcast data exists and
// if the time of the last API update request is less than 24 hours
const getCachedPodcasts = () => {
  const cachedPodcasts = localStorage.getItem("podcastArr");

  const getLastUpdatedPodcastsDate = () =>
  getLastUpdatedDate("lastUpdatedPodcastsDate");

  const isPodcastsDiffMoreThanDay = isDiffMoreThanDay(
    getLastUpdatedPodcastsDate
  );

  if (cachedPodcasts && getLastUpdatedPodcastsDate() && !isPodcastsDiffMoreThanDay) {
    return JSON.parse(cachedPodcasts);
  }

  return null;
};

// should return the 100 most popular podcasts from the iTunes API
export const getPodcasts = createAsyncThunk<PodcastProps[]>(
  "getPodcasts",
  async () => {
    const cachedPodcasts = getCachedPodcasts();

    if (cachedPodcasts) {
      return cachedPodcasts;
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}us/rss/toppodcasts/limit=100/genre=1310/json`
      );

      const podcasts = response.data.feed.entry.map(
        (podcast: PodcastOriginProps) => {
          const podcastId = podcast.id.attributes["im:id"];
          const podcastTitle = podcast["im:name"].label;
          const podcastSrcImg = podcast["im:image"][2].label;
          const podcastHeightImg = podcast["im:image"][2].attributes.height;
          const podcastAuthor = podcast["im:artist"].label;
          const podcastDescription = podcast.summary.label;

          return {
            id: podcastId,
            title: podcastTitle,
            srcImg: podcastSrcImg,
            heightImg: podcastHeightImg,
            author: podcastAuthor,
            description: podcastDescription,
          };
        }
      );

      // save the time of the last API update request in localStorage
      localStorage.setItem(
        "lastUpdatedPodcastsDate",
        JSON.stringify(new Date().getTime().toString())
      );

      // stores the 100 most popular podcasts from the iTunes API in localStorage
      localStorage.setItem("podcastArr", JSON.stringify(podcasts));

      return podcasts;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: PodcastsState = {
  podcastList: [],
  loadingPodcasts: false,
  selectedPodcast: {
    id: "",
    title: "",
    heightImg: "",
    srcImg: "",
    author: "",
    description: "",
  },
};

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: initialState,
  reducers: {
    setSelectedPodcast: (state, action) => {
      const { id, title, heightImg, srcImg, author, description } =
        action.payload;
      state.selectedPodcast.id = id;
      state.selectedPodcast.title = title;
      state.selectedPodcast.heightImg = heightImg;
      state.selectedPodcast.srcImg = srcImg;
      state.selectedPodcast.author = author;
      state.selectedPodcast.description = description;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPodcasts.pending, (state) => {
        state.loadingPodcasts = true;
      })
      .addCase(
        getPodcasts.fulfilled,
        (state, action: PayloadAction<PodcastProps[]>) => {
          state.loadingPodcasts = false;
          state.podcastList = action.payload;
        }
      )
      .addCase(getPodcasts.rejected, (state) => {
        state.loadingPodcasts = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedPodcast } = podcastsSlice.actions;

export const podcastsArr = (state: { podcasts: PodcastsState }) =>
  state.podcasts.podcastList;
export const isPodcastsLoading = (state: { podcasts: PodcastsState }) =>
  state.podcasts.loadingPodcasts;

export default podcastsSlice.reducer;

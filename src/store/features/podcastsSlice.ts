import { createSlice } from '@reduxjs/toolkit'

const initialState: PodcastsState = {
  selectedPodcast: {
    id: "",
    title: "",
    heightImg: "",
    srcImg: "",
    author: "",
    description: ""
  }
}

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: initialState,
  reducers: {
    setSelectedPodcast: (state, action) => {
      const { id, title, heightImg, srcImg, author, description } = action.payload;
      state.selectedPodcast.id = id;
      state.selectedPodcast.title = title;
      state.selectedPodcast.heightImg = heightImg;
      state.selectedPodcast.srcImg = srcImg;
      state.selectedPodcast.author = author;
      state.selectedPodcast.description = description;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedPodcast } = podcastsSlice.actions

export default podcastsSlice.reducer
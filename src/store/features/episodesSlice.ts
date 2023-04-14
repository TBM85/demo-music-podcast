import { createSlice } from '@reduxjs/toolkit'

export interface EpisodesState {
  selectedEpisode: EpisodeProps
}

const initialState: EpisodesState = {
  selectedEpisode: {
    id: "",
    collectionId: "",
    title: "",
    url: "",
    description: "",
    releaseDate: "",
    durationTime: 0,
  }
}

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: initialState,
  reducers: {
    setSelectedEpisode: (state, action) => {
      const { id, collectionId, title, url, description, releaseDate, durationTime } = action.payload;
      state.selectedEpisode.id = id;
      state.selectedEpisode.collectionId = collectionId;
      state.selectedEpisode.title = title;
      state.selectedEpisode.url = url;
      state.selectedEpisode.description = description;
      state.selectedEpisode.releaseDate = releaseDate;
      state.selectedEpisode.durationTime = durationTime;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedEpisode } = episodesSlice.actions

export default episodesSlice.reducer
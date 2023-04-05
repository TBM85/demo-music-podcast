import { createContext, useState } from "react";

const contextDefaultValues: AppStateConfigProps = {
  selectedPodcast: undefined,
  setSelectedPodcast: () => {},
  selectedEpisode: undefined,
  setSelectedEpisode: () => {},
};

export const AppStateContext =
  createContext<AppStateConfigProps>(contextDefaultValues);

const AppStateProvider = ({ children }: Props) => {
  const [selectedPodcast, updateSelectedPodcast] = useState<PodcastProps>();
  const [selectedEpisode, updateSelectedEpisode] = useState<EpisodeProps>();

  const setSelectedPodcast = (podcast: PodcastProps | undefined) => {
    updateSelectedPodcast(podcast);
  };

  const setSelectedEpisode = (episode: EpisodeProps | undefined) => {
    updateSelectedEpisode(episode);
  };

  return (
    <AppStateContext.Provider
      value={{
        selectedPodcast,
        setSelectedPodcast,
        selectedEpisode,
        setSelectedEpisode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;

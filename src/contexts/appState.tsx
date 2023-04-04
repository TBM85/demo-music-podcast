import { createContext, useState } from "react";

const contextDefaultValues: AppStateConfig = {
  selectedPodcast: undefined,
  setSelectedPodcast: () => {},
}

export const AppStateContext = createContext<AppStateConfig>(contextDefaultValues);

const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [selectedPodcast, updateSelectedPodcast] = useState<PodcastProps>();

  const setSelectedPodcast = (podcast: PodcastProps | undefined) => {
    updateSelectedPodcast(podcast);
    localStorage.setItem('selectedPodcast', JSON.stringify(podcast));
  }

  return (
    <AppStateContext.Provider value={{ selectedPodcast, setSelectedPodcast }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
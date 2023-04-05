import { createContext, useState } from "react";

const contextDefaultValues: AppStateConfigProps = {
  selectedPodcast: undefined,
  setSelectedPodcast: () => {},
};

export const AppStateContext =
  createContext<AppStateConfigProps>(contextDefaultValues);

const AppStateProvider = ({ children }: Props) => {
  const [selectedPodcast, updateSelectedPodcast] = useState<PodcastProps>();

  const setSelectedPodcast = (podcast: PodcastProps | undefined) => {
    updateSelectedPodcast(podcast);
  };

  return (
    <AppStateContext.Provider value={{ selectedPodcast, setSelectedPodcast }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;

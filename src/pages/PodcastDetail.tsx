import { useContext } from "react";
import { AppStateContext } from "../contexts/appState";

const PodcastDetail = () => {
  const {
    selectedPodcast,
  } = useContext(AppStateContext);

  return (
    <>
      <h2>{selectedPodcast?.["im:name"].label}</h2>
    </>
  )
}

export default PodcastDetail;
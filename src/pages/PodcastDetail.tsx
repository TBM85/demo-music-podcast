import Img from "../components/Img";
import useData from "../hooks/useData";

const PodcastDetail = () => {
  const { selectedPodcast } = useData();

  return (
    <>
      {selectedPodcast && selectedPodcast["im:image"][2].label && (
        <Img data={selectedPodcast} className="square-image" />
       )}
      <h2>{selectedPodcast?.["im:name"].label}</h2>
    </>
  )
}

export default PodcastDetail;
import DetailsCard from "../components/DetailsCard";
import useData from "../hooks/useData";

const PodcastDetail = () => {
  const { selectedPodcast } = useData();

  return (
    <>
      {selectedPodcast && (
        <DetailsCard item={selectedPodcast} />
      )}
    </>
  )
}

export default PodcastDetail;
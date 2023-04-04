import DetailsCard from "../components/DetailsCard";
import useData from "../hooks/useData";

const PodcastDetail = () => {
  const { selectedPodcast } = useData();

  return (
    <div className="podcast__details">
      {selectedPodcast && (
        <DetailsCard item={selectedPodcast} />
      )}
    </div>
  )
}

export default PodcastDetail;
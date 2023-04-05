import PodcastDetailsCard from "../components/PodcastDetailsCard";
import useData from "../hooks/useData";
import EpisodesAmountCard from "../components/EpisodesAmountCard";
import EpisodesListCard from "../components/EpisodesListCard";

const PodcastDetail = () => {
  const { selectedPodcast } = useData();

  return (
    <div className="podcast-details-episodes">
      <div className="podcast-details-episodes__container">
        <div className="podcast-details__card">
          {selectedPodcast && <PodcastDetailsCard item={selectedPodcast} />}
        </div>
        <div className="podcast-episodes__container">
          <div className="podcast-episodes__amount">
            <EpisodesAmountCard />
          </div>
          <div className="podcast-episodes__list">
            <EpisodesListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;

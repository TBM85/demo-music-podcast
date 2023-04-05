import PodcastDetailsCard from "../components/PodcastDetailsCard";
import useData from "../hooks/useData";
import EpisodesAmountCard from "../components/EpisodesAmountCard";
import EpisodesListCard from "../components/EpisodesListCard";

const PodcastDetail = () => {
  const { selectedPodcast, selectedPodcastEpisodes } = useData();

  return (
    <div className="podcast-details-episodes">
      {selectedPodcast && selectedPodcastEpisodes ? (
        <div className="podcast-details-episodes__container">
          <div className="podcast-details__card">
            <PodcastDetailsCard item={selectedPodcast} />
          </div>
          <div className="podcast-episodes__container">
            <div className="podcast-episodes__amount">
              <EpisodesAmountCard item={selectedPodcastEpisodes} />
            </div>
            <div className="podcast-episodes__list">
              <EpisodesListCard />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PodcastDetail;

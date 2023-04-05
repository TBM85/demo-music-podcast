import PodcastDetailsCard from "../components/PodcastDetailsCard";
import useData from "../hooks/useData";

const Layout = ({ children }: Props) => {
  const { selectedPodcast, selectedPodcastEpisodes } = useData();

  return (
    <div className="podcast-details-episodes">
      {selectedPodcast && selectedPodcastEpisodes ? (
        <div className="podcast-details-episodes__container">
          <div className="podcast-details__card">
            <PodcastDetailsCard item={selectedPodcast} />
          </div>
          <main>{children}</main>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Layout;

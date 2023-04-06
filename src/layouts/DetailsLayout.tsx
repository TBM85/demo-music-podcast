import PodcastDetailsCard from "../components/PodcastDetailsCard";
import Spinner from "../components/Spinner";
import useData from "../hooks/useData";

const Layout = ({ children }: Props) => {
  const { selectedPodcast, podcastEpisodes, loadingEpisodes } = useData();

  return (
    <div className="podcast-details-episodes">
      <div className="podcast-details-episodes__container">
        {selectedPodcast && podcastEpisodes ? (
          <>
            <div className="podcast-details__card">
              <PodcastDetailsCard item={selectedPodcast} />
            </div>
            {!loadingEpisodes ? <main>{children}</main> : <Spinner />}
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Layout;

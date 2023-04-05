import useData from "../hooks/useData";
import EpisodesAmountCard from "../components/EpisodesAmountCard";
import EpisodesListCard from "../components/EpisodesListCard";
import Layout from "../layouts/MainLayout";
import DetailsLayout from "../layouts/DetailsLayout";

const PodcastDetail = () => {
  const { podcastEpisodes } = useData();

  return (
    <Layout>
      <DetailsLayout>
        <div className="podcast-episodes__container">
          <div className="podcast-episodes__amount">
            <EpisodesAmountCard item={podcastEpisodes as EpisodeProps[]} />
          </div>
          <div className="podcast-episodes__list">
            <EpisodesListCard item={podcastEpisodes as EpisodeProps[]} />
          </div>
        </div>
      </DetailsLayout>
    </Layout>
  );
};

export default PodcastDetail;

import EpisodeDetailsCard from "../components/EpisodeDetailsCard/EpisodeDetailsCard";
import DetailsLayout from "../layouts/DetailsLayout";
import Layout from "../layouts/MainLayout";

const EpisodeDetails = () => {
  return (
    <Layout>
      <DetailsLayout>
        <EpisodeDetailsCard />
      </DetailsLayout>
    </Layout>
  );
};

export default EpisodeDetails;

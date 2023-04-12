import Search from "../components/Search/Search";
import PodcastList from "../components/PodcastList";
import useSearch from "../hooks/useSearch";
import useData from "../hooks/useData";
import Layout from "../layouts/MainLayout";

const PodcastMain = () => {
  const { searchText, searchResults, handleChange } = useSearch();
  const { loadingPodcasts } = useData();

  return (
    <Layout>
      <Search
        results={searchResults}
        searchText={searchText}
        handleChange={handleChange}
      />
      <PodcastList podcastList={searchResults} loading={loadingPodcasts} />
    </Layout>
  );
};

export default PodcastMain;

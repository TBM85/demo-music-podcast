import Search from '../components/Search';
import PodcastList from "../components/PodcastList";
import useSearch from "../hooks/useSearch";
import Layout from '../layouts/MainLayout';

const PodcastMain = () => {
  const { searchText, searchResults, handleChange } = useSearch();

  return (
    <Layout>
      <Search results={searchResults} searchText={searchText} handleChange={handleChange} />
      <PodcastList podcastList={searchResults} />
    </Layout>
  )
}

export default PodcastMain;
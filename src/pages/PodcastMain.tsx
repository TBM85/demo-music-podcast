import Search from '../components/Search';
import PodcastList from "../components/PodcastList";
import useSearch from "../hooks/useSearch";

const PodcastMain = () => {
  const { searchText, searchResults, handleChange } = useSearch();

  return (
    <>
      <Search results={searchResults} searchText={searchText} handleChange={handleChange} />
      <PodcastList podcastList={searchResults} />
    </>
  )
}

export default PodcastMain;
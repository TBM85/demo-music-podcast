import './App.scss';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import Search from './components/Search';
import useSearch from './hooks/useSearch';

function App() {
  const { searchText, searchResults, handleChange } = useSearch();

  return (
    <div className="App">
      <Header title="Podcaster" link="/" />
      <Search results={searchResults} searchText={searchText} handleChange={handleChange} />
      <PodcastList podcastList={searchResults} />
    </div>
  );
}

export default App;

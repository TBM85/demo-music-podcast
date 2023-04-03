import './App.scss';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import useData from './hooks/useData';

function App() {
  const { podcastList } = useData();

  return (
    <div className="App">
      <Header title="Podcaster" link="/" />
      <PodcastList podcastList={podcastList} />
    </div>
  );
}

export default App;

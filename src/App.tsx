import './App.scss';
import Header from './components/Header';
import PodcastList from './components/PodcastList';

function App() {
  return (
    <div className="App">
      <Header title="Podcaster" link="/" />
      <PodcastList />
    </div>
  );
}

export default App;

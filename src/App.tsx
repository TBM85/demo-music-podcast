import { Routes, Route } from "react-router-dom";
import "./App.scss";
import PodcastMain from "./pages/PodcastMain";
import PodcastDetails from "./pages/PodcastDetails";
import NotFound from "./pages/NotFound";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PodcastMain />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EpisodeDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

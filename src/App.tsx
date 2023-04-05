import { Routes, Route } from "react-router-dom";
import "./App.scss";
import PodcastMain from "./pages/PodcastMain";
import PodcastDetails from "./pages/PodcastDetails";
import AppStateProvider from "./contexts/appState";
import NotFound from "./pages/NotFound";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
  return (
    <div className="App">
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<PodcastMain />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<EpisodeDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppStateProvider>
    </div>
  );
}

export default App;

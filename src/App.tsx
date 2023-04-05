import { Routes, Route } from "react-router-dom";
import "./App.scss";
import PodcastMain from "./pages/PodcastMain";
import PodcastDetail from "./pages/PodcastDetails";
import AppStateProvider from "./contexts/appState";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<PodcastMain />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppStateProvider>
    </div>
  );
}

export default App;

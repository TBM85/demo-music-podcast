import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import PodcastMain from "./pages/PodcastMain";
import PodcastDetail from "./pages/PodcastDetails";
import AppStateProvider from "./contexts/appState";

function App() {
  return (
    <div className="App">
      <Header title="Podcaster" link="/" />
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<PodcastMain />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        </Routes>
      </AppStateProvider>
    </div>
  );
}

export default App;

import useData from "../hooks/useData";

const EpisodeDetailsCard = () => {
  const { selectedEpisode } = useData();

  return (
    <div className="podcast-details-episodes card">
      {selectedEpisode && (
        <div className="">
          <h2>{selectedEpisode.trackName}</h2>
          <pre>{selectedEpisode.description}</pre>
          <audio id={selectedEpisode.trackId.toString()} controls>
            <source src={selectedEpisode.episodeUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetailsCard;

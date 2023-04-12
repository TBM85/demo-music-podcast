import useData from "../../hooks/useData";

const EpisodeDetailsCard = () => {
  const { selectedEpisode } = useData();

  return (
    <div className="podcast-details-episodes card">
      {selectedEpisode && (
        <div className="">
          <h3>{selectedEpisode.title}</h3>
          <pre>{selectedEpisode.description}</pre>
          <audio id={selectedEpisode.id.toString()} controls>
            <source src={selectedEpisode.url} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetailsCard;

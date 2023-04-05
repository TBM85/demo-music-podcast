import { useLocation, useNavigate } from "react-router-dom";
import { dateFormat, timeFormat } from "../utils/utils";
import { useContext } from "react";
import { AppStateContext } from "../contexts/appState";

const EpisodesListCard = (props: { item: EpisodeProps[] }) => {
  const { item } = props;

  const navigate = useNavigate();
  let location = useLocation();
  const { setSelectedEpisode } = useContext(AppStateContext);

  const handleEpisodeClick = (episode: EpisodeProps) => {
    setSelectedEpisode(episode);
    navigate(`${location.pathname}/episode/${episode.trackId}`);
  };

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {item.map((episode: EpisodeProps) => (
            <tr key={`episode-item-${episode.trackId}`}>
              <td
                className="episode-item__link"
                onClick={() => handleEpisodeClick(episode)}
              >
                {episode.trackName}
              </td>
              <td>{dateFormat(episode.releaseDate)}</td>
              <td>{timeFormat(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesListCard;

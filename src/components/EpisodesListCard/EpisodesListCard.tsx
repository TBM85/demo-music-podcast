import { useLocation, useNavigate } from "react-router-dom";
import { dateFormat, timeFormat } from "../../utils/utils";
import { useContext } from "react";
import { AppStateContext } from "../../contexts/appState";

const EpisodesListCard = (props: { item: EpisodeProps[] }) => {
  const { item } = props;

  const navigate = useNavigate();
  let location = useLocation();
  const { setSelectedEpisode } = useContext(AppStateContext);

  const handleClick = (episode: EpisodeProps) => {
    setSelectedEpisode(episode);
    navigate(`${location.pathname}/episode/${episode.id}`);
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
          {item &&
            item.map((episode: EpisodeProps) => (
              <tr key={`episode-item-${episode.id}`}>
                <td
                  className="episode-item__link"
                  onClick={() => handleClick(episode)}
                >
                  {episode.title}
                </td>
                <td>
                  {episode.releaseDate ? dateFormat(episode.releaseDate) : "-"}
                </td>
                <td>
                  {episode.durationTime
                    ? timeFormat(episode.durationTime)
                    : "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesListCard;

import { useLocation, useNavigate } from "react-router-dom";
import { dateFormat, timeFormat } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setSelectedEpisode } from "../../store/features/episodesSlice";

const EpisodesListCard = (props: { item: EpisodeProps[] }) => {
  const { item } = props;

  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();

  const handleClick = (episode: EpisodeProps) => {
    dispatch(setSelectedEpisode(episode));
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

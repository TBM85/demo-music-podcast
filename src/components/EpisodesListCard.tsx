import { dateFormat } from "../utils/utils";

const EpisodesListCard = (props: { item: EpisodeProps[] }) => {
  const { item } = props;

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
              <td>{episode.trackName}</td>
              <td>{dateFormat(episode.releaseDate)}</td>
              <td>{episode.trackTimeMillis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesListCard;

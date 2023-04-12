import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../../contexts/appState";
import Img from "../PodcastImage/Img";
import Spinner from "../Spinner/Spinner";

const PodcastList = (props: {
  podcastList: PodcastProps[];
  loading: boolean;
}) => {
  const { podcastList, loading } = props;
  const navigate = useNavigate();
  const { setSelectedPodcast } = useContext(AppStateContext);

  const handleClick = (podcast: PodcastProps) => {
    setSelectedPodcast(podcast);
    navigate(`/podcast/${podcast.id}`);
  };

  return (
    <div className="podcasts">
      {!loading ? (
        podcastList.length > 0 ? (
          podcastList.map((item) => (
            <div
              className="card podcast"
              key={`data-item-${item.id}`}
              onClick={() => handleClick(item)}
            >
              {item.srcImg && <Img data={item} className="round-image" />}
              {item.title && <h2 className="podcast__title">{item.title}</h2>}
              {item.author && (
                <div className="podcast__author">
                  <strong>Author: </strong>
                  <span>{item.author}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No podcasts match your search</div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PodcastList;

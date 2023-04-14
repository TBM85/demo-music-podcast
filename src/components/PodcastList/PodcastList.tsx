import { useNavigate } from "react-router-dom";
import Img from "../PodcastImage/Img";
import Spinner from "../Spinner/Spinner";
import { useDispatch } from "react-redux";
import { setSelectedPodcast } from "../../store/features/podcastsSlice";

const PodcastList = (props: {
  podcastList: PodcastProps[];
  loading: boolean;
}) => {
  const { podcastList, loading } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (podcast: PodcastProps) => {
    dispatch(setSelectedPodcast(podcast));
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

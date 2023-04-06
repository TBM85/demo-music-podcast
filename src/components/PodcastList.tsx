import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../contexts/appState";
import Img from "./Img";
import Spinner from "./Spinner";

const PodcastList = (props: {
  podcastList: PodcastProps[];
  loading: boolean;
}) => {
  const { podcastList, loading } = props;
  const navigate = useNavigate();
  const { setSelectedPodcast } = useContext(AppStateContext);

  const handleClick = (podcast: PodcastProps) => {
    setSelectedPodcast(podcast);
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`);
  };

  return (
    <div className="podcasts">
      {!loading ? (
        podcastList.length > 0 ? (
          podcastList.map((item) => (
            <div
              className="card podcast"
              key={`data-item-${item.id.attributes["im:id"]}`}
              onClick={() => handleClick(item)}
            >
              {item["im:image"][2].label && (
                <Img data={item} className="round-image" />
              )}
              {item["im:name"] && (
                <h2 className="podcast__title">{item["im:name"].label}</h2>
              )}
              {item["im:artist"] && (
                <div className="podcast__author">
                  <strong>Author: </strong>
                  <span>{item["im:artist"].label}</span>
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

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../contexts/appState";
import Img from "./Img";

const PodcastList = (props: { podcastList: PodcastProps[] }) => {
  const navigate = useNavigate();
  const {
    setSelectedPodcast
  } = useContext(AppStateContext);

  const handlePodcastClick = (podcast: PodcastProps) => {
    setSelectedPodcast(podcast);
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`)
  }

  return (
    <div className="podcasts">
      {props.podcastList.length !== 0 ? (
        props.podcastList.map((item) => (
          <div
            className="card podcast"
            key={`data-item-${item.id.attributes["im:id"]}`}
            onClick={() => handlePodcastClick(item)}
          >
            {item["im:image"][2].label && (
              <Img data={item} className="round-image" />
            )}
            {item["im:name"] && (
              <h2 className="podcast__title">
                {item["im:name"].label}
              </h2>
            )}
            {item["im:artist"] && (
              <div className="podcast__author">
                <h4>Author: </h4>
                <span>
                  {item["im:artist"].label}
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default PodcastList;

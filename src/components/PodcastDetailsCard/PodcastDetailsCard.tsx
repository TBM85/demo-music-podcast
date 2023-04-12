import { useNavigate } from "react-router-dom";
import Img from "../PodcastImage/Img";

const PodcastDetailsCard = (props: { item: PodcastProps }) => {
  const { item } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="details__card" onClick={handleClick}>
      <div className="card podcast">
        {item["im:image"][2].label && (
          <Img data={item} className="square-image" />
        )}
        <div className="podcast__line"></div>
        {item["im:name"] && (
          <h2 className="podcast__title">{item["im:name"].label}</h2>
        )}
        {item["im:artist"] && (
          <span className="podcast__author">by {item["im:artist"].label}</span>
        )}
        <div className="podcast__line"></div>
        {item.summary && (
          <div className="podcast__description">
            <strong>Description:</strong>
            <p>{item.summary.label}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastDetailsCard;

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
        {item.srcImg && <Img data={item} className="square-image" />}
        <div className="podcast__line"></div>
        {item.title && <h2 className="podcast__title">{item.title}</h2>}
        {item.author && (
          <span className="podcast__author">by {item.author}</span>
        )}
        <div className="podcast__line"></div>
        {item.description && (
          <div className="podcast__description">
            <strong>Description:</strong>
            <p>{item.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastDetailsCard;

import Img from "./Img";

const PodcastDetailsCard = (props: { item: PodcastProps }) => {
  const { item } = props;

  return (
    <div className="details__card">
      <div className="card podcast">
        {item["im:image"][2].label && (
          <Img data={item} className="square-image" />
        )}
        <div className="podcast__line"></div>
        {item["im:name"] && (
          <h3 className="podcast__title">{item["im:name"].label}</h3>
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

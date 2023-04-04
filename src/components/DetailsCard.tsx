import Img from "./Img"

const DetailsCard = (props: { item: PodcastProps }) => {
  const { item } = props;
  
  return (
    <div className="podcast__details">
      {item["im:image"][2].label && (
        <Img data={item} className="square-image" />
      )}
      {item["im:name"] && (
        <h3 className="podcast__title">
          {item["im:name"].label}
        </h3>
      )}
      {item["im:artist"] && (
        <span className="podcast__author">
          by {item["im:artist"].label}
        </span>
      )}
      {item.summary && (
        <span className="podcast__description">
          {item.summary.label}
        </span>
      )}
    </div>
  )
}

export default DetailsCard
const PodcastList = (props: { podcastList: PodcastProps[] }) => (
  <div className="podcasts">
    {props.podcastList.length !== 0 ? (
      props.podcastList.map((item) => (
        <div
          className="podcast"
          key={`data-item-${item.id.attributes["im:id"]}`}
        >
          {item["im:image"][0].label && (
            <img
              src={item["im:image"][2].label}
              alt={item["im:name"].label}
              height={item["im:image"][2].attributes.height}
              width={item["im:image"][2].attributes.height}
              className="podcast__image"
            />
          )}
          {item["im:name"] && (
            <h2 className="podcast__title">
              {item["im:name"].label}
            </h2>
          )}
          {item["im:artist"] && (
            <span className="podcast__author">
              <strong>Author: </strong>
              {item["im:artist"].label}
            </span>
          )}
        </div>
      ))
    ) : (
      <p>Loading data...</p>
    )}
  </div>
);

export default PodcastList;

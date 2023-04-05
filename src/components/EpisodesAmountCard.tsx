const EpisodesAmountCard = (props: { item: EpisodeProps[] }) => {
  const { item } = props;

  return (
    <div className="card">
      <strong>Episodes: </strong>
      <span>{item.length}</span>
    </div>
  );
};

export default EpisodesAmountCard;

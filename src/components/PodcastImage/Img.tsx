const Img = (props: { data: PodcastProps; className?: string }) => {
  const { data, className } = props;

  return (
    <img
      src={data.srcImg}
      alt={data.title}
      height={data.heightImg}
      width={data.heightImg}
      className={`podcast__image ${className}`}
    />
  );
};

export default Img;

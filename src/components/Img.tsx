const Img = (props: { data: PodcastProps, className?: string }) => {
  const { data, className } = props;

  return (
    <img
      src={data["im:image"][2].label}
      alt={data["im:name"].label}
      height={data["im:image"][2].attributes.height}
      width={data["im:image"][2].attributes.height}
      className={`podcast__image ${className}`}
    />
  )
}

export default Img;
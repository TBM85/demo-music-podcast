import useData from "../hooks/useData";

const PodcastDetail = () => {
  const { selectedPodcast } = useData();

  return (
    <>
      <h2>{selectedPodcast?.["im:name"].label}</h2>
    </>
  )
}

export default PodcastDetail;
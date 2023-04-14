import axios from "axios";

const BASE_URL = "https://itunes.apple.com/";

// should return the episodes of each podcast from the iTunes API
export const fetchPodcastEpisodesListData = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20/json`
    );

    const episodes = response.data.results
      .slice(1)
      .map((episode: EpisodeOriginProps) => {
        const episodeId = episode.trackId.toString();
        const collectionId = episode.collectionId.toString();
        const episodeTitle = episode.trackName;
        const episodeDescription = episode.description;
        const episodeUrl = episode.episodeUrl;
        const episodeReleaseDate = episode.releaseDate;
        const episodeTimeMillis = episode.trackTimeMillis;

        return {
          id: episodeId,
          collectionId: collectionId,
          title: episodeTitle,
          url: episodeUrl,
          description: episodeDescription,
          releaseDate: episodeReleaseDate,
          durationTime: episodeTimeMillis,
        };
      });

    // save the time of the last API update request in localStorage
    localStorage.setItem(
      "lastUpdatedEpisodesDate",
      JSON.stringify(new Date().getTime().toString())
    );

    // stores podcast episodes list from the iTunes API in localStorage
    localStorage.setItem("episodesArr", JSON.stringify(episodes));

    return episodes;
  } catch (error) {
    console.error(error);
  }
};

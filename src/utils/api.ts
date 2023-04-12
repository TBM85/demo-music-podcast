import axios from "axios";

const BASE_URL = "https://itunes.apple.com/";

// should return the 100 most popular podcasts from the iTunes API
export const fetchPodcastListData = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`
    );

    const podcasts = response.data.feed.entry.map(
      (podcast: PodcastOriginProps) => {
        const podcastId = podcast.id.attributes["im:id"];
        const podcastTitle = podcast["im:name"].label;
        const podcastSrcImg = podcast["im:image"][2].label;
        const podcastHeightImg = podcast["im:image"][2].attributes.height;
        const podcastAuthor = podcast["im:artist"].label;
        const podcastDescription = podcast.summary.label;

        return {
          id: podcastId,
          title: podcastTitle,
          srcImg: podcastSrcImg,
          heightImg: podcastHeightImg,
          author: podcastAuthor,
          description: podcastDescription,
        };
      }
    );

    // save the time of the last API update request in localStorage
    localStorage.setItem(
      "lastUpdatedPodcastsDate",
      JSON.stringify(new Date().getTime().toString())
    );

    // stores the 100 most popular podcasts from the iTunes API in localStorage
    localStorage.setItem("podcastArr", JSON.stringify(podcasts));

    return podcasts;
  } catch (error) {
    console.error(error);
  }
};

// should return the episodes of each podcast from the iTunes API
export const fetchPodcastEpisodesListData = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20/json`
    );

    // save the time of the last API update request in localStorage
    localStorage.setItem(
      "lastUpdatedEpisodesDate",
      JSON.stringify(new Date().getTime().toString())
    );

    // stores podcast episodes list from the iTunes API in localStorage
    localStorage.setItem(
      "episodesArr",
      JSON.stringify(response.data.results.slice(1))
    );

    return response.data.results.slice(1);
  } catch (error) {
    console.error(error);
  }
};

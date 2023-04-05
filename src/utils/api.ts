import axios from "axios";

const BASE_URL = "https://itunes.apple.com/";

// should return the 100 most popular podcasts from the iTunes API
export const fetchPodcastListData = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`
    );

    // save the time of the last API update request in localStorage
    localStorage.setItem(
      "lastUpdatedPodcastDate",
      JSON.stringify(new Date().getTime().toString())
    );

    // stores the 100 most popular podcasts from the iTunes API in localStorage
    localStorage.setItem(
      "podcastArr",
      JSON.stringify(response.data.feed.entry)
    );

    return response.data.feed.entry;
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

    return response.data.results.slice(1);
  } catch (error) {
    console.error(error);
  }
};

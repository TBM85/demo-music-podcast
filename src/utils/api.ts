import axios from 'axios';

const BASE_URL = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const fetchPodcastListData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.feed.entry;
  } catch (error) {
    console.error(error);
  }
};
import { useCallback, useEffect, useState } from "react";
import {
  fetchPodcastEpisodesListData,
  fetchPodcastListData,
} from "../utils/api";

const useData = () => {
  const [podcastList, setPodcastList] = useState<PodcastProps[]>([]);
  const [selectedPodcast, setSelectedPodcast] = useState<PodcastProps>();
  const [selectedPodcastEpisodes, setSelectedPodcastEpisodes] = useState<any>();

  // make an API request to get the list of podcasts
  const getPodcastListFromAPI = async () => {
    const podcastListData = await fetchPodcastListData();
    setPodcastList(podcastListData);
  };

  // make an API request to get the list of episodes for each podcast
  const getPodcastEpisodesListFromAPI = useCallback(async () => {
    if (selectedPodcast) {
      const podcastId = Number(selectedPodcast.id.attributes["im:id"]);
      const podcastEpisodesListData = await fetchPodcastEpisodesListData(
        podcastId
      );

      setSelectedPodcastEpisodes(podcastEpisodesListData);
    }
  }, [selectedPodcast]);

  // make a request to localStorage to get the list of podcasts
  const getPodcastListFromLocalStorage = () => {
    const dataPodcastArr = localStorage.getItem("podcastArr");
    if (dataPodcastArr) {
      setPodcastList(JSON.parse(dataPodcastArr));
    }
  };

  // make a request to localStorage to get the time of the last API update request
  const getLastUpdatedDateFromLocalStorage = () => {
    const dataLastUpdatedPodcastDate = localStorage.getItem(
      "lastUpdatedPodcastDate"
    );
    if (dataLastUpdatedPodcastDate) {
      return Number(JSON.parse(dataLastUpdatedPodcastDate));
    }
  };

  // make a request to localStorage to get the details of the selected podcast
  const getSelectedPodcastFromLocalStorage = () => {
    const podcast = localStorage.getItem("selectedPodcast");
    if (podcast) {
      setSelectedPodcast(JSON.parse(podcast));
    }
  };

  // returns "true" if the difference between the current time and the time of the last API update request
  // is greater than 24 hours; otherwise, it returns "false"
  const isDiffMoreThanDay = useCallback(() => {
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const diffTime =
      currentTime - (getLastUpdatedDateFromLocalStorage() as number);

    return diffTime >= twentyFourHours;
  }, []);

  useEffect(() => {
    // request API data, if this is the first request or more than 24 hours have passed since the last request
    // request data from localstorage, if 24 hours haven't passed since the last request
    if (!getLastUpdatedDateFromLocalStorage() || isDiffMoreThanDay()) {
      getPodcastListFromAPI();
    } else {
      getPodcastListFromLocalStorage();
    }
  }, [isDiffMoreThanDay]);

  useEffect(() => {
    getSelectedPodcastFromLocalStorage();
  }, []);

  useEffect(() => {
    getPodcastEpisodesListFromAPI();
  }, [getPodcastEpisodesListFromAPI]);

  return {
    podcastList,
    selectedPodcast,
    selectedPodcastEpisodes,
  };
};

export default useData;

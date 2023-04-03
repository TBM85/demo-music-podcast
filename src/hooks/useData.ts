import { useCallback, useEffect, useState } from "react";
import { fetchPodcastListData } from "../utils/api";

const useData = () => {
  const [podcastList, setPodcastList] = useState<PodcastProps[]>([]);

  // make a request to the API to get the list of podcasts
  const getPodcastListFromAPI = async () => {
    const podcastListData = await fetchPodcastListData();
    setPodcastList(podcastListData);
  };

  // make a request to localStorage to get the list of podcasts
  const getPodcastListFromLocalStorage = () => {
    const dataPodcastArr = localStorage.getItem("podcastArr");
    if (dataPodcastArr) {
      setPodcastList(JSON.parse(dataPodcastArr));
    }
  };

  // make a request to localStorage to get the time of the last API update request
  const getLastUpdatedDateFromLocalStorage = () => {
    const dataLastUpdatedPodcastDate = localStorage.getItem("lastUpdatedPodcastDate");
    if (dataLastUpdatedPodcastDate) {
      return Number(JSON.parse(dataLastUpdatedPodcastDate));
    }
  };

  // returns "true" if the difference between the current time and the time of the last API update request 
  // is greater than 24 hours; otherwise, it returns "false"
  const isDiffMoreThanDay = useCallback(() => {
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const diffTime = currentTime - (getLastUpdatedDateFromLocalStorage() as number);
  
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

  return {
    podcastList
  }
};

export default useData;
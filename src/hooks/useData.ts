import { useCallback, useEffect, useState } from "react";
import {
  fetchPodcastEpisodesListData,
  fetchPodcastListData,
} from "../utils/api";
import { useParams } from "react-router-dom";

const useData = () => {
  const { podcastId, episodeId } = useParams();
  const [podcastList, setPodcastList] = useState<PodcastProps[]>([]);
  const [selectedPodcast, setSelectedPodcast] = useState<PodcastProps>();
  const [podcastEpisodes, setPodcastEpisodes] = useState<EpisodeProps[]>();
  const [selectedEpisode, setSelectedEpisode] = useState<EpisodeProps>();
  const [loadingPodcasts, setLoadingPodcasts] = useState<boolean>(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState<boolean>(true);
  const [selectedEpisodesId, setSelectedEpisodesId] = useState<string>();

  // make an API request to get the list of podcasts
  const getPodcastListFromAPI = useCallback(async () => {
    const podcastListData = await fetchPodcastListData();
    setPodcastList(podcastListData);
  }, []);

  // make an API request to get the list of episodes for each podcast
  const getPodcastEpisodesFromAPI = useCallback(async () => {
    if (podcastId) {
      const podcastEpisodesData = await fetchPodcastEpisodesListData(
        Number(podcastId)
      );
      setPodcastEpisodes(podcastEpisodesData);
    }
  }, [podcastId]);

  // make a request to localStorage to get the list of podcasts
  const getPodcastListFromLocalStorage = () => {
    const dataPodcastArr = localStorage.getItem("podcastArr");
    if (dataPodcastArr) {
      setPodcastList(JSON.parse(dataPodcastArr));
    }
  };

  // make a request to localStorage to get the list of episodes
  const getPodcastEpisodesFromLocalStorage = () => {
    const dataPodcastEpisodesArr = localStorage.getItem("episodesArr");
    if (dataPodcastEpisodesArr) {
      setPodcastEpisodes(JSON.parse(dataPodcastEpisodesArr));
    }
  };

  // get the details of the selected podcast
  const getSelectedPodcast = useCallback(() => {
    if (podcastId) {
      const podcastWithSelectedId = podcastList.find(
        (podcast) => podcast.id === podcastId
      );
      setSelectedPodcast(podcastWithSelectedId);
    }
  }, [podcastId, podcastList]);

  // get the details of the selected episode
  const getSelectedEpisode = useCallback(() => {
    if (episodeId && podcastEpisodes) {
      const episodeWithSelectedId = podcastEpisodes.find(
        (episode) => episode.id === episodeId
      );
      setSelectedEpisode(episodeWithSelectedId);
    }
  }, [episodeId, podcastEpisodes]);

  // make a request to localStorage to get the time of the last API update request
  const getLastUpdatedDate = (name: string) => {
    const dataLastUpdatedDate = localStorage.getItem(name);
    if (dataLastUpdatedDate) {
      return Number(JSON.parse(dataLastUpdatedDate));
    }
  };
  const getLastUpdatedPodcastsDate = useCallback(
    () => getLastUpdatedDate("lastUpdatedPodcastsDate"),
    []
  );
  const getLastUpdatedEpisodesDate = useCallback(
    () => getLastUpdatedDate("lastUpdatedEpisodesDate"),
    []
  );

  // get id of selected podcast episodes
  const getSelectedEpisodesId = useCallback(() => {
    if (podcastEpisodes) {
      setSelectedEpisodesId(podcastEpisodes[0].collectionId);
    }
  }, [podcastEpisodes]);

  // returns "true" if the difference between the current time and the time of the last API update request
  // is greater than 24 hours; otherwise, it returns "false"
  const isDiffMoreThanDay = useCallback((getLastUpdatedDate: Function) => {
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const diffTime = currentTime - (getLastUpdatedDate() as number);
    return diffTime >= twentyFourHours;
  }, []);

  const isPodcastsDiffMoreThanDay = isDiffMoreThanDay(
    getLastUpdatedPodcastsDate
  );
  const isEpisodesDiffMoreThanDay = isDiffMoreThanDay(
    getLastUpdatedEpisodesDate
  );

  // request API data, if this is the first request or more than 24 hours have passed since the last request
  // request data from localstorage, if 24 hours haven't passed since the last request
  useEffect(() => {
    if (!getLastUpdatedPodcastsDate() || isPodcastsDiffMoreThanDay) {
      getPodcastListFromAPI();
    } else {
      getPodcastListFromLocalStorage();
    }
  }, [
    getLastUpdatedPodcastsDate,
    getPodcastListFromAPI,
    isPodcastsDiffMoreThanDay,
  ]);

  useEffect(() => {
    if (
      !getLastUpdatedEpisodesDate() ||
      isEpisodesDiffMoreThanDay ||
      (podcastId &&
        selectedEpisodesId &&
        selectedEpisodesId !== podcastId)
    ) {
      getPodcastEpisodesFromAPI();
    } else {
      getPodcastEpisodesFromLocalStorage();
    }
  }, [
    getLastUpdatedEpisodesDate,
    getPodcastEpisodesFromAPI,
    isEpisodesDiffMoreThanDay,
    selectedEpisodesId,
    podcastId,
  ]);

  useEffect(() => {
    getSelectedPodcast();
  }, [getSelectedPodcast]);

  useEffect(() => {
    getSelectedEpisode();
  }, [getSelectedEpisode]);

  useEffect(() => {
    getSelectedEpisodesId();
  }, [getSelectedEpisodesId]);

  useEffect(() => {
    setLoadingPodcasts(false);
  }, [podcastList]);

  useEffect(() => {
    setLoadingEpisodes(false);
  }, [podcastEpisodes]);

  return {
    podcastList,
    loadingPodcasts,
    loadingEpisodes,
    selectedPodcast,
    podcastEpisodes,
    selectedEpisode,
  };
};

export default useData;

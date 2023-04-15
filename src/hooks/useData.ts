import { useCallback, useEffect, useState } from "react";
import {
  fetchPodcastEpisodesListData,
} from "../utils/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts, podcastsArr, isPodcastsLoading } from '../store/features/podcastsSlice';
import { AppDispatch } from "../store/store";
import { getLastUpdatedDate, isDiffMoreThanDay } from "../utils/utils";

const useData = () => {
  const podcastList = useSelector(podcastsArr);
  const loadingPodcasts = useSelector(isPodcastsLoading);
  const dispatch: AppDispatch = useDispatch();
  const { podcastId, episodeId } = useParams();
  const [selectedPodcast, setSelectedPodcast] = useState<PodcastProps>();
  const [podcastEpisodes, setPodcastEpisodes] = useState<EpisodeProps[]>();
  const [selectedEpisode, setSelectedEpisode] = useState<EpisodeProps>();
  const [loadingEpisodes, setLoadingEpisodes] = useState<boolean>(true);
  const [selectedEpisodesId, setSelectedEpisodesId] = useState<string>();

  // make an API request to get the list of episodes for each podcast
  const getPodcastEpisodesFromAPI = useCallback(async () => {
    if (podcastId) {
      const podcastEpisodesData = await fetchPodcastEpisodesListData(
        Number(podcastId)
      );
      setPodcastEpisodes(podcastEpisodesData);
    }
  }, [podcastId]);

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

  // make a request to localStorage to get the time of the last API update request for the episodes
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
  const isEpisodesDiffMoreThanDay = isDiffMoreThanDay(
    getLastUpdatedEpisodesDate
  );

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
    setLoadingEpisodes(false);
  }, [podcastEpisodes]);

  useEffect(() => {
    dispatch(getPodcasts());
  }, [dispatch]);

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

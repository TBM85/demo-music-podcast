import { useEffect, useState } from "react";
import useData from "./useData";

const useSearch = () => {
  const { podcastList } = useData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] =
    useState<PodcastProps[]>(podcastList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (podcastList) {
      const filteredResults = podcastList.filter(
        (podcast: PodcastProps) =>
          podcast.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          podcast.author
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [podcastList, searchText]);

  return {
    searchText,
    searchResults,
    handleChange,
  };
};

export default useSearch;

interface AppStateProviderProps {
  children: React.ReactNode;
}

interface AppStateConfig {
  selectedPodcast: PodcastProps | undefined;
  setSelectedPodcast: (podcast: PodcastProps | undefined) => void;
}

interface HeaderProps {
  title: string;
  link: string;
}

interface SearchProps {
  results: PodcastProps[];
  searchText: string;
  handleChange: Function;
}

interface PodcastProps {
  category: {
    attributes: {
      "im:id": string;
      label: string;
      scheme: string;
      term: string;
    };
  };
  id: {
    attributes: {
      "im:id": string;
    };
    label: string;
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  "im:contentType": {
    attributes: {
      label: string;
      term: string;
    };
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  "im:name": {
    label: string;
  };
  "im:price": {
    attributes: {
      amount: string;
      currency: string;
    };
    label: string;
  };
  "im:releaseDate": {
    attributes: {
      label: string;
    };
    label: string;
  };
  link: {
    attributes: {
      href: string;
      rel: string;
      type: string;
    };
  };
  rights: {
    label: string;
  };
  summary: {
    label: string;
  };
  title: {
    label: string;
  };
}

interface EpisodeProps {
  artistIds: number[];
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl160: string;
  artworkUrl600: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  description: string;
  episodeContentType: string;
  episodeFileExtension: string;
  episodeGuid: string;
  episodeUrl: string;
  feedUrl: string;
  genres: { name: string; genreId: string }[];
  kind: string;
  previewUrl: string;
  releaseDate: string;
  shortDescription: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

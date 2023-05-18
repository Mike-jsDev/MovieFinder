import { MovieType } from '@interfaces/app/enums';

const mediaType = {
  movie: MovieType.Movie,
  tv: MovieType.Tv,
};

const mediaCategory = {
  popular: 'popular',
  top_rated: 'top_rated',
};

const mediaConfigs = {
  mediaType,
  mediaCategory,
};

export const baseVideoUrl = 'https://www.youtube-nocookie.com/embed/';

export const homePageCarouselData = [
  {
    config: {
      movieType: mediaConfigs.mediaType.movie,
      movieCategory: mediaConfigs.mediaCategory.popular,
    },
    sectionTitle: 'POPULAR MOVIE',
  },
  {
    config: {
      movieType: mediaConfigs.mediaType.tv,
      movieCategory: mediaConfigs.mediaCategory.popular,
    },
    sectionTitle: 'POPULAR SERIALS',
  },
  {
    config: {
      movieType: mediaConfigs.mediaType.movie,
      movieCategory: mediaConfigs.mediaCategory.top_rated,
    },
    sectionTitle: 'TOP RATED MOVIE',
  },
  {
    config: {
      movieType: mediaConfigs.mediaType.tv,
      movieCategory: mediaConfigs.mediaCategory.top_rated,
    },
    sectionTitle: 'TOP RATED SERIALS',
  },
];

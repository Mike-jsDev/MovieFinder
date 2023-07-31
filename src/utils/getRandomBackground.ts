import placeholder from '@images/mainSectionBg.jpg';
import { Movie } from '@interfaces/app/interfaces';

export const getRandomBackground = (movies: Movie[]): string => {
  const randomItem = movies[Math.floor(Math.random() * movies.length)];
  const randomBackground = randomItem ? randomItem.backdrop_path : placeholder;

  return randomBackground;
};

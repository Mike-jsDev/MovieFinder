import placeholder from '@images/mainSectionBg.jpg';
import { IMovie } from '@interfaces/app/interfaces';

export const getRandomBackground = (movies: IMovie[]): string => {
  const randomItem = movies[Math.floor(Math.random() * movies.length)];
  const randomBackground = randomItem ? randomItem.backdrop_path : placeholder;

  return randomBackground;
};

import { FC, useEffect, useState } from 'react';
import { getMovies } from '../businessLogic/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import CarouselContainer from './CarouselContainer';
import { ConfigTypes, Movie } from 'appInterfaces/interfaces';
import 'swiper/css';

const Carousel: FC<ConfigTypes> = ({ movieType, movieCategory }) => {
  const sectionTitle = `${movieCategory.replace('_', ' ')} ${movieType.replace(
    'tv',
    'serials',
  )} `;

  const [movies, setMovies] = useState<Movie[]>([]);

  const getAllMovies = async (): Promise<void> => {
    const response = await getMovies({ movieType, movieCategory });

    if (response) {
      setMovies(response);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [movieType, movieCategory]);

  return movies.length ? (
    <CarouselContainer title={sectionTitle}>
      <Swiper spaceBetween={40} slidesPerView={4}>
        {movies?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  ) : null;
};

export default Carousel;

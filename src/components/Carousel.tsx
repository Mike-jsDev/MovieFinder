import { FC, useCallback, useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getCategorizedMovies } from '@businessLogic/movies';
import { sliderStyles } from '@constants/sliderStyles';
import { ICarouselProps, IMovie } from '@interfaces/app/interfaces';

import { CarouselContainer } from './CarouselContainer';
import { MovieCard } from './MovieCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Carousel: FC<ICarouselProps> = ({ config, sectionTitle }) => {
  const { movieType, movieCategory } = config;
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getAllCategorizedMovies = useCallback(async () => {
    const response = await getCategorizedMovies({ movieType, movieCategory });

    if (response) {
      setMovies(response);
    }
  }, [movieType, movieCategory]);

  useEffect(() => {
    getAllCategorizedMovies();
  }, [getAllCategorizedMovies]);

  return movies.length ? (
    <CarouselContainer title={sectionTitle} dataPage='homePage'>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ dynamicBullets: true, clickable: true }}
        style={sliderStyles}
        modules={[Pagination]}
      >
        {movies?.map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} movieType={movieType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  ) : null;
};

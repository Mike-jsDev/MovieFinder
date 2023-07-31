import { FC, useCallback, useEffect, useState } from 'react';
import { getCategorizedMovies } from '@businessLogic/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { MovieCard } from './MovieCard';
import { CarouselContainer } from './CarouselContainer';
import { ConfigTypes, Movie } from '@interfaces/app/interfaces';
import { sliderStyles } from '@constants/sliderStyles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarouselProps {
  config: ConfigTypes;
  sectionTitle: string;
}

export const Carousel: FC<CarouselProps> = ({ config, sectionTitle }) => {
  const { movieType, movieCategory } = config;
  const [movies, setMovies] = useState<Movie[]>([]);

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
        {movies?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} movieType={movieType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  ) : null;
};

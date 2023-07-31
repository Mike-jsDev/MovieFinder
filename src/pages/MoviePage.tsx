import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Container, Pagination, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '@redux/actions';
import { Banner } from '@components/Banner';
import { MovieCard } from '@components/MovieCard';
import { Loader } from '@components/Loader';
import { MovieType } from '@interfaces/app/enums';
import { Movie } from '@interfaces/app/interfaces';
import { LoadingState } from '@interfaces/redux/interfaces';
import { getDiscoverMovies } from '@businessLogic/movies';
import { getRandomBackground } from '@utils/getRandomBackground';

export const MoviePage: FC = () => {
  const location = useLocation().pathname;

  const movieType = location === '/movies' ? MovieType.Movie : MovieType.Tv;
  const dispatch = useDispatch();
  const isLoading = useSelector((state: LoadingState) => {
    return state.isLoading;
  });

  const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [randomBackground, setRandomBackground] = useState<string>('');

  const getInfo = useCallback(
    async (page: number): Promise<void> => {
      const results = await getDiscoverMovies({ movieType, page });
      if (results) {
        setDiscoverMovies(results);
        setRandomBackground(getRandomBackground(results));
        dispatch(setIsLoading(false));
      }
    },
    [movieType],
  );

  useEffect(() => {
    getInfo(page);
  }, [getInfo, page]);

  return (
    <Box sx={{ position: 'relative' }}>
      {isLoading ? (
        <Loader openLoader={isLoading} />
      ) : (
        <>
          <Banner backdropPath={randomBackground} />
          <Container
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridGap: '20px',
            }}
          >
            {discoverMovies &&
              discoverMovies.map((movie) => <MovieCard key={movie.id} movie={movie} movieType={movieType} />)}
          </Container>
          <Container>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={2}
              sx={{ margin: '2rem 0', padding: '1rem 0', borderRadius: '0.5rem' }}
            >
              <Pagination
                variant='outlined'
                shape='rounded'
                count={100}
                page={page}
                onChange={(_, num) => {
                  setPage(num);
                }}
              />
            </Stack>
          </Container>
        </>
      )}
    </Box>
  );
};

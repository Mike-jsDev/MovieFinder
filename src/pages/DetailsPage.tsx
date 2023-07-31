import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsById } from '@businessLogic/movies';
import { Banner } from '@components/Banner';
import { DetailsContent } from '@components/DetailsContent';
import { MovieType } from '@interfaces/app/enums';
import { IMovieDetails } from '@interfaces/app/interfaces';
import { Container } from '@mui/material';

export const DetailsPage: FC = () => {
  const { id, movieType } = useParams<{ id: string; movieType: MovieType }>();

  const [info, setInfo] = useState<IMovieDetails | null>(null);

  const getInfo = useCallback(async () => {
    if (movieType) {
      const results = await getMovieDetailsById({ id: Number(id), movieType });
      results && setInfo(results);
    }
  }, [id, movieType]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <>
      {info && (
        <>
          <Banner backdropPath={info.backdrop_path} />
          <Container>
            <DetailsContent contentInfo={info} />
          </Container>
        </>
      )}
    </>
  );
};

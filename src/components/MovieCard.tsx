import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircularRate from './CircularRate';
import { Movie } from 'appInterfaces/interfaces';
import { styled } from '@mui/material/styles';
import { theme } from '@theme/global-styles';

const Card = styled(Box)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150%;
  border-radius: 0.5rem;
  overflow: hidden;

  :hover .card-info {
    opacity: 1;
    bottom: 0;
  }

  :hover .card-back-drop {
    opacity: 1;
  }
  color: ${theme.palette.primary.contrastText};
`;

const FavoriteIconBox = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CardBackDrop = styled(Box)`
  opacity: 0;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const CardInfo = styled(Box)`
  position: absolute;
  opacity: 0;
  bottom: -20px;
  width: 100%;
  height: max-content;
  padding: 2rem 1rem;
  transition: all 0.3s ease;
`;

const MovieCard: FC<{ movie: Movie }> = ({ movie }) => {
  const {
    vote_average,
    release_date,
    title,
    first_air_date,
    name,
    poster_path,
  } = movie;

  return (
    <Link to={'#'}>
      <Card
        style={{
          backgroundImage: `url(${process.env.POSTER_URL}${poster_path})`,
        }}
      >
        <FavoriteIconBox>
          <FavoriteIcon
            sx={{ fontSize: '2rem', color: 'custom.electricViolet' }}
          />
        </FavoriteIconBox>
        <CardBackDrop className='card-back-drop' />
        <CardInfo className='card-info'>
          <Stack spacing={{ xs: 1, md: 2 }}>
            <CircularRate value={vote_average} />
            <Typography variant='body1'>
              {release_date || first_air_date}
            </Typography>
            <Typography variant='h5' fontWeight='700'>
              {title || name}
            </Typography>
          </Stack>
        </CardInfo>
      </Card>
    </Link>
  );
};

export default MovieCard;

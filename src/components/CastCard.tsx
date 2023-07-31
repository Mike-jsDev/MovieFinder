import { FC } from 'react';

import placeholder from '@images/placeholder.svg';
import { ICast } from '@interfaces/app/interfaces';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '@theme/global-styles';

const Card = styled(Box)`
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 2 / 3;
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
  width: auto;
  height: max-content;
  padding: 2rem 1rem;
  transition: all 0.3s ease;
`;

export const CastCard: FC<{ person: ICast }> = ({ person }) => {
  const { name, profile_path, character } = person;

  const backgroundImage = profile_path ? `url(${process.env.POSTER_URL}${profile_path})` : `url(${placeholder})`;

  return (
    <Card
      style={{
        backgroundImage: `${backgroundImage}`,
        cursor: 'grab',
      }}
    >
      <CardBackDrop className='card-back-drop' />
      <CardInfo className='card-info'>
        <Stack spacing={{ xs: 1, md: 2 }}>
          <Typography variant='h5' fontWeight='700'>
            {name}
          </Typography>
          <Typography variant='body1'>{character}</Typography>
        </Stack>
      </CardInfo>
    </Card>
  );
};

import { FC, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { sliderStyles } from '@constants/sliderStyles';
import placeholder from '@images/placeholder.svg';
import { IMovieDetails } from '@interfaces/app/interfaces';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CarouselContainer } from './CarouselContainer';
import { CastCard } from './CastCard';
import { CircularRate } from './CircularRate';
import { TrailerPopup } from './TrailerPopup';

const Section = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const PosterBox = styled(Box)`
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 60%;
  width: 40%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ContentBox = styled(Box)`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MiddleContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const BottomContent = styled(Box)`
  display: block;
`;

export const DetailsContent: FC<{ contentInfo: IMovieDetails }> = ({ contentInfo }) => {
  const { id, title, overview, genres, release_date, last_air_date, poster_path, casts, credits, vote_average } =
    contentInfo;

  const videosResults = contentInfo.videos.results;

  const backgroundImage = poster_path ? `url(${process.env.POSTER_URL}${poster_path})` : `url(${placeholder})`;

  const actors = casts || credits;

  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);

  const closeModal = (): void => {
    setPreviewModalOpen(false);
  };

  return (
    <Section id={`${id}`}>
      <PosterBox
        sx={{
          backgroundImage: `${backgroundImage}`,
        }}
      />
      <ContentBox>
        <TopContent>
          <Typography component='h1' variant='h2' sx={{ fontWeight: '700', textAlign: 'left' }}>
            {title}
          </Typography>
          <Typography component='h2' variant='h4' sx={{ fontWeight: '300' }}>
            Release date:{' '}
            <Typography component='span' variant='h6' sx={{ mt: '2rem' }}>
              {release_date || last_air_date}
            </Typography>
          </Typography>
          <Typography component='h2' variant='h4' sx={{ fontWeight: '300' }}>
            Genre:{' '}
            {genres.map((genre) => (
              <Typography key={genre.id} component='span' variant='h6' sx={{ mt: '2rem' }}>
                &nbsp;{genre.name}
              </Typography>
            ))}
          </Typography>
        </TopContent>
        <MiddleContent>
          <CircularRate value={vote_average} />
          <Button
            variant='contained'
            sx={{ width: 'max-content', height: 'max-content' }}
            size='medium'
            startIcon={<PlayArrowIcon />}
            onClick={() => {
              setPreviewModalOpen(true);
            }}
          >
            watch now
          </Button>
        </MiddleContent>
        <MiddleContent>
          <Typography component='p' variant='h6'>
            {overview}
          </Typography>
        </MiddleContent>
        <BottomContent>
          {actors && (
            <CarouselContainer title='Cast' dataPage='detailsPage'>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ dynamicBullets: true, clickable: true }}
                style={sliderStyles}
                modules={[Pagination]}
              >
                {actors.cast?.map((person) => (
                  <SwiperSlide key={person.id}>
                    <CastCard person={person} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </CarouselContainer>
          )}
        </BottomContent>
      </ContentBox>
      <TrailerPopup videos={videosResults} isOpen={isPreviewModalOpen} handleClose={closeModal} />
    </Section>
  );
};

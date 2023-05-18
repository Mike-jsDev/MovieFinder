import { FC } from 'react';
import { VideosResults } from '@interfaces/app/interfaces';
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { sliderStyles } from '@constants/sliderStyles';
import { baseVideoUrl } from '@constants/index';

export const TrailerPopup: FC<{ videos: VideosResults[]; isOpen: boolean; handleClose: () => void }> = ({
  videos,
  isOpen,
  handleClose,
}) => {
  const makeYoutubePath = (videoKey: string): string => `${baseVideoUrl}${videoKey}?controls=0`;

  return (
    <Dialog fullWidth={true} maxWidth={'xl'} open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Swiper spaceBetween={20} slidesPerView={1} navigation={true} style={sliderStyles} modules={[Navigation]}>
          {videos.length ? (
            videos.map((video) => {
              return (
                <SwiperSlide key={video.id}>
                  <iframe
                    src={makeYoutubePath(video.key)}
                    title={video.name}
                    style={{ border: 0, display: 'block', margin: 'auto', width: '85%', aspectRatio: '16 / 9' }}
                  ></iframe>
                  <Typography variant='h5' sx={{ textAlign: 'center', padding: '10px' }}>
                    {video.name}
                  </Typography>
                </SwiperSlide>
              );
            })
          ) : (
            <Typography variant='h3' sx={{ textAlign: 'center', padding: '10px' }}>
              No video Content
            </Typography>
          )}
        </Swiper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: 'custom.electricViolet', fontWeight: '600' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

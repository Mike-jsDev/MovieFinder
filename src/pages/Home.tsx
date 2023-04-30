import { FC } from 'react';
import MainSection from '@components/MainSection';
import Carousel from '@components/Carousel';
import { mediaConfigs } from '../constants';

const Home: FC = () => {
  return (
    <>
      <MainSection />
      <Carousel
        movieType={mediaConfigs.mediaType.movie}
        movieCategory={mediaConfigs.mediaCategory.popular}
      />
      <Carousel
        movieType={mediaConfigs.mediaType.tv}
        movieCategory={mediaConfigs.mediaCategory.popular}
      />
      <Carousel
        movieType={mediaConfigs.mediaType.movie}
        movieCategory={mediaConfigs.mediaCategory.top_rated}
      />
      <Carousel
        movieType={mediaConfigs.mediaType.tv}
        movieCategory={mediaConfigs.mediaCategory.top_rated}
      />
    </>
  );
};

export default Home;

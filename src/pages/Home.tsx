import { FC } from 'react';

import { Carousel } from '@components/Carousel';
import { MainSection } from '@components/MainSection';
import { homePageCarouselData } from '@constants/index';

export const Home: FC = () => {
  return (
    <>
      <MainSection />
      {homePageCarouselData.map((carousel) => (
        <Carousel key={carousel.sectionTitle} config={carousel.config} sectionTitle={carousel.sectionTitle} />
      ))}
    </>
  );
};

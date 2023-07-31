import { FC } from 'react';
import { MainSection } from '@components/MainSection';
import { Carousel } from '@components/Carousel';
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

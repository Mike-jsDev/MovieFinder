import { FC } from 'react';

import { Box, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '@theme/global-styles';

const SwipeContainer = styled(Container)`
  &[data-page='homePage'] {
    margin-bottom: 4rem;
  }
  &[data-page='detailsPage'] {
    padding: 0;
  }
`;
const TitleBox = styled(Box)`
  position: relative;
  width: 100%;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    height: 5px;
    width: 100px;
    background-color: ${theme.palette.custom.electricViolet};
  }
`;

interface CarouselContainerProps {
  title: string;
  dataPage?: string;
  children?: React.ReactNode;
}

export const CarouselContainer: FC<CarouselContainerProps> = ({ title, children, dataPage = 'homePage' }) => {
  return (
    <SwipeContainer data-page={dataPage}>
      <Stack spacing={4}>
        <TitleBox>
          <Typography variant='h5' fontWeight='700' textTransform='uppercase'>
            {title}
          </Typography>
        </TitleBox>
        {children}
      </Stack>
    </SwipeContainer>
  );
};

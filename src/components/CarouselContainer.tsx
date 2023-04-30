import { FC } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '@theme/global-styles';

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

interface Props {
  title: string;
  children?: React.ReactNode;
}

const CarouselContainer: FC<Props> = ({ title, children }) => {
  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Stack spacing={4}>
        <TitleBox>
          <Typography variant='h5' fontWeight='700' textTransform='uppercase'>
            {title}
          </Typography>
        </TitleBox>
        {children}
      </Stack>
    </Container>
  );
};

export default CarouselContainer;

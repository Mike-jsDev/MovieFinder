import { FC } from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const SearchBox = styled(Paper)`
  padding: 2px 4px;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
`;

export const InputSearch: FC = () => {
  return (
    <SearchBox>
      <InputBase disabled={true} sx={{ ml: 1, flex: 1 }} placeholder='Search' inputProps={{ 'aria-label': 'search' }} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </SearchBox>
  );
};

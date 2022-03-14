import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { City, ListParams } from 'models';
import { ChangeEvent, useRef } from 'react';

export interface StudentFiltersProps {
  filter: ListParams;
  cityList: City[];

  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

export default function StudentFilters({
  filter,
  cityList,
  onChange,
  onSearchChange,
}: StudentFiltersProps) {
  const searchRef = useRef<HTMLInputElement>();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    const newFilter: ListParams = {
      ...filter,
      name_like: e.target.value || undefined,
      _page: 1,
    };
    onSearchChange(newFilter);
  };

  const handleCityChange = (e: SelectChangeEvent) => {
    if (!onChange) return;
    const newFilter: ListParams = {
      ...filter,
      city: e.target.value || undefined,
      _page: 1,
    };
    onChange(newFilter);
  };

  const handleSortChange = (e: SelectChangeEvent) => {
    if (!onChange) return;

    const value = e.target.value;
    const [_sort, _order] = value.split('.');

    const newFilter: ListParams = {
      ...filter,
      _sort: _sort || undefined,
      _order: (_order as 'asc' | 'desc') || undefined,
    };
    onChange(newFilter);
  };

  const handleClearFilter = () => {
    if (!onChange) return;

    const newFilter: ListParams = {
      ...filter,
      _page: 1,
      _sort: undefined,
      _order: undefined,
      city: undefined,
      name_like: undefined,
    };
    onChange(newFilter);

    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth size='small'>
            <InputLabel htmlFor='searchByName'>Search by name</InputLabel>
            <OutlinedInput
              id='searchByName'
              endAdornment={<Search />}
              label='Search by name'
              onChange={handleSearchChange}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth size='small'>
            <InputLabel id='filterByCity'>Filter by city</InputLabel>
            <Select
              labelId='filterByCity'
              value={filter.city || ''}
              onChange={handleCityChange}
              label='Filter by city'
            >
              <MenuItem value=''>
                <em>All</em>
              </MenuItem>
              {cityList.map((city) => (
                <MenuItem key={city.code} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={2}>
          <FormControl fullWidth size='small'>
            <InputLabel id='sortBy'>Sort</InputLabel>
            <Select
              labelId='sortBy'
              value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
              onChange={handleSortChange}
              label='Sort'
            >
              <MenuItem value=''>
                <em>No sort</em>
              </MenuItem>

              <MenuItem value='name.asc'>Name ASC</MenuItem>
              <MenuItem value='name.desc'>Name DESC</MenuItem>
              <MenuItem value='mark.asc'>Mark ASC</MenuItem>
              <MenuItem value='mark.desc'>Mark DESC</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={1}>
          <Button variant='outlined' color='primary' fullWidth onClick={handleClearFilter}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

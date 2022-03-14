import { Box, Button, createTheme, LinearProgress, Pagination, Typography } from '@mui/material';
import studentApi from 'api/studentApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCityList, selectCityMap } from 'features/city/citySlice';
import { ListParams, Student } from 'models';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { history } from 'utils';
import StudentFilters from '../components/StudentFilters';
import StudentTable from '../components/StudentTable';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentLoading,
  selectStudentPagination,
  studentActions,
} from '../studentSlice';

const theme = createTheme();

export default function ListPage() {
  const match = useLocation();

  const dispatch = useAppDispatch();

  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudentLoading);
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [filter]); //dispatch

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilter(newFilter));
  };

  const handleRemoveStudent = async (student: Student) => {
    // console.log('Handle remove student', student);
    try {
      //  Remove student API
      await studentApi.remove(student?.id || '');
      // Trigger to re-fetch student list with current filter
      toast.success('Remove student successfully!');
      const newFilter = { ...filter };
      dispatch(studentActions.setFilter(newFilter));
    } catch (error) {
      console.log('Failed to fetch student', error);
    }
  };

  const handleEditStudent = async (student: Student) => {
    history.push(`${match.pathname}/${student.id}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        pt: theme.spacing(1),
      }}
    >
      {loading && (
        <LinearProgress
          sx={{
            position: 'absolute',
            top: theme.spacing(-1),
            width: '100%',
          }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: theme.spacing(4),
        }}
      >
        <Typography variant='h5'>Students</Typography>
        <Link to='add' style={{ textDecoration: 'none' }}>
          <Button variant='contained' color='primary'>
            Add new student
          </Button>
        </Link>
      </Box>
      {/* Filters */}
      <Box mb={3}>
        <StudentFilters
          filter={filter}
          cityList={cityList}
          onChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </Box>

      {/* StudentTable */}
      <StudentTable
        studentList={studentList}
        cityMap={cityMap}
        onRemove={handleRemoveStudent}
        onEdit={handleEditStudent}
      />

      {/* Pagination */}
      <Box
        my={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Pagination
          color='primary'
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

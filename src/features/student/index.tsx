import { useAppDispatch } from 'app/hooks';
import { cityActions } from 'features/city/citySlice';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentFeature() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='add' element={<AddEditPage />} />
      <Route path=':studentId' element={<AddEditPage />} />
    </Routes>
  );
}

import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentFeature() {
  return (
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='add' element={<AddEditPage />} />
      <Route path=':studentId' element={<AddEditPage />} />
    </Routes>
  );
}

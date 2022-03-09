import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route path='/login' element={<LoginPage />} />
      //Setup PrivateRoute syntax
      <Route
        path='/admin'
        element={
          <PrivateRoute redirectTo='/login'>
            <AdminLayout />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import studentApi from 'api/studentApi';
import { ColorModeContext } from 'context/ColorModeContext';
import { Student } from 'models';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { history } from 'utils';
import StudentForm from '../components/StudentForm';

export default function AddEditPage() {
  const { mode } = useContext(ColorModeContext);
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);

  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (!studentId) return;

    (async () => {
      try {
        const data: Student = await studentApi.getById(studentId);
        setStudent(data);
      } catch (error) {
        console.log('Failed to fetch student details', error);
      }
    })();
  }, [studentId]);

  const handleStudentFormSubmit = async (formValues: Student) => {
    if (isEdit) {
      await studentApi.update(formValues);
    } else {
      await studentApi.add(formValues);
    }
    const message = isEdit;
    // toast.success(message ? 'Update student successfully!' : 'Add student successfully!');
    toast.success('Save student successfully!');
    // throw new Error('My testing error!!!')
    history.push('/admin/students');
  };

  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;
  const test = mode === 'dark' ? { color: '#fff' } : {};
  return (
    <Box>
      <Link to='/admin/students'>
        <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft sx={test} />
          <Box sx={test}> Back to student list</Box>
        </Typography>
      </Link>
      <Typography variant='h5'>{isEdit ? 'Update student info' : 'Add new student'}</Typography>

      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm initialValues={initialValues} onSubmit={handleStudentFormSubmit} />
        </Box>
      )}
    </Box>
  );
}

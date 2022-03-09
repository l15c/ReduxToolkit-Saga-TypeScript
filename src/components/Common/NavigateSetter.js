import { useNavigate } from 'react-router-dom';
import { history } from 'utils';

export const NavigateSetter = () => {
  history.navigate = useNavigate();

  return null;
};
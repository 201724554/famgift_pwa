// hooks/useAppNavigate.ts
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');
  const goToProfile = (url) => navigate(url);
  const goBack = () => navigate(-1);

  return { goToHome, goToProfile, goBack };
};

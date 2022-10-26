import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext();
  return myUser ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;

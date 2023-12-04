import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';
import { Navigate, useLocation } from 'react-router-dom';


const PrivaeRoute = ({ children }) => {
const loc = useLocation()
   const { user, loading } = useAuth()
   if (loading) {
      return <LoadingAnimation />;
   }
   if (user?.email) {
      return children;
   }
   return <Navigate to='/login' state={loc.pathname} replace={true} ></Navigate>
}


PrivaeRoute.propTypes = {
   children: PropTypes.node
}
export default PrivaeRoute;
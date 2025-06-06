import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedResult = ({ children }) => {
  const detectionResult = useSelector(state => state.detection.result);

  if (!detectionResult) {
    return <Navigate to="/detection" replace />;
  }

  return children;
};

export default ProtectedResult;

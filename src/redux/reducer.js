import { reducer as detectionReducer } from './detection';
import { reducer as authReducer } from './auth';

export default {
  auth: authReducer,
  detection: detectionReducer,
};

import { reducer as authReducer } from './auth';
import { reducer as detectionReducer } from './detection';
import { reducer as detectionHistoryReducer } from './detectionHistory';
import { reducer as registerReducer } from './register';

export default {
  auth: authReducer,
  register: registerReducer,
  detection: detectionReducer,
  detectionHistory: detectionHistoryReducer,
};

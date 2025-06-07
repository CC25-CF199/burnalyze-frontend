import { reducer as authReducer } from './auth';
import { reducer as detectionReducer } from './detection';
import { reducer as detectionHistoryReducer } from './detectionHistory';

export default {
  auth: authReducer,
  detection: detectionReducer,
  detectionHistory: detectionHistoryReducer,
};

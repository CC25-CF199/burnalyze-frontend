import { reducer as authReducer } from './auth';
import { reducer as detectionReducer } from './detection';
import { reducer as detectionHistoryReducer } from './detectionHistory';
import { reducer as registerReducer } from './register';
import { reducer as historyDetailsReducer } from './historyDetails';
import { reducer as userProfileReducer } from './userProfile';

export default {
  auth: authReducer,
  register: registerReducer,
  detection: detectionReducer,
  detectionHistory: detectionHistoryReducer,
  historyDetails: historyDetailsReducer,
  userProfile: userProfileReducer,
};

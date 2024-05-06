
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from './slicer/auth.slice';
import doctorReducer from './slicer/doctor.slice'
import turnoReducer from './slicer/turno.slice'

const authPersistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  doctor:doctorReducer,
  turno:turnoReducer
});

export default rootReducer;

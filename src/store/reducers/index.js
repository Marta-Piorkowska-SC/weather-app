import { combineReducers } from 'redux';
import searchReducer from './search/reducer';
import { reducer as formReducer } from 'redux-form'




export default combineReducers({
    search: searchReducer,
    form: formReducer
});

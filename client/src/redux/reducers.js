import { combineReducers } from 'redux';
import game from './game/reducers';

// combine all reducers
export default () =>
  combineReducers({
    game
  });

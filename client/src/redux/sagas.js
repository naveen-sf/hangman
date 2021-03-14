import { all } from 'redux-saga/effects';
import game from './game/sagas';

// saga declartion
export default function* rootSaga() {
  yield all([game()]);
}

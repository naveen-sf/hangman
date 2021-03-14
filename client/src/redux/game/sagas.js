import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { getGameData, setNewGameData, updateGameData, getRandomWordData } from "../../service/api";

// action to get game data
export function* GETGAMEDATA({ userEmail }) {
  const gameData = yield call(getGameData, { userEmail });
  if (!gameData) {
    yield put({
      type: 'game/SET_STATE',
      payload: {
        isFoundData: false
      },
    });
  } else {
    yield put({
      type: 'game/SET_STATE',
      payload: {
        gameData
      },
    });
  }
}

// action to set new game data
export function* SETNEWGAMEDATA({
  secretWord,
  missesAllowed,
  win,
  lost,
  letters,
  fullWord,
  email,
  definition }) {
  const gameData = yield call(setNewGameData, {
    secretWord,
    missesAllowed,
    win,
    lost,
    letters,
    fullWord,
    email,
    definition
  });
  if (gameData) {
    yield put({
      type: 'game/SET_STATE',
      payload: {
        gameData
      },
    });
  }
}

// action to update game data
export function* UPDATEGAMEDATA({ secretWord,
  missesAllowed,
  win,
  lost,
  letters,
  fullWord,
  email,
  id,
  definition }) {
  const gameData = yield call(updateGameData, {
    secretWord,
    missesAllowed,
    win,
    lost,
    letters,
    fullWord,
    email,
    id,
    definition
  });
  if (gameData) {
    yield put({
      type: 'game/SET_STATE',
      payload: {
        gameData,
        randomWordData: {}
      },
    });
  }
}

// action to get random word
export function* GETRANDOMWORD() {
  const randomWordData = yield call(getRandomWordData);
  if (randomWordData) {
    yield put({
      type: 'game/SET_STATE',
      payload: {
        randomWordData
      },
    });
  }
}

// action to reset game data
export function* RESETGAMEDATA() {
  yield put({
    type: 'game/SET_STATE',
    payload: {
      isFoundData: false
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_GAME_DATA, GETGAMEDATA),
    takeEvery(actions.SET_NEW_GAME, SETNEWGAMEDATA),
    takeEvery(actions.UPDATE_GAME_DATA, UPDATEGAMEDATA),
    takeEvery(actions.GET_RANDOM_WORD, GETRANDOMWORD),
    takeEvery(actions.RESET_GAME_DATA, RESETGAMEDATA),
  ]);
}

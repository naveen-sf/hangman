import actions from './actions';

const initialState = {
    gameData: {
        email: "",
        fullWord: "",
        letters: [],
        missesAllowed: 0,
        lost: false,
        win: false,
        secretWord: [],
        id: null
    },
    isFoundData: true,
    randomWordData: [],
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

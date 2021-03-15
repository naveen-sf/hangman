import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import { notification } from 'antd';
import Keyboard from './Keyboard';
import Hangman from "./Hangman";
import Header from './Header';
import NewGameButton from "./NewGameButton";
import EndGame from "./EndGame";
import Loader from "../loader/index";
import './game.scss';

const totalMistakes = 6;

const mapStateToProps = ({
    game: {
        isFoundData, gameData, randomWordData
    },
}) => ({
    isFoundData, gameData, randomWordData
});

// method to create the letters
const makeLetters = (word) =>
    _.map(word.split(''), (letter) => ({ name: letter, chosen: false }));

// component game.js used to play game
const Game = ({ userEmail, dispatch, isFoundData, gameData, randomWordData }) => {
    const [gameState, setGameState] = useState({});
    const [loading, setLoading] = useState(true);
    const myStateRef = useRef(gameState);

    const getRandomWord = () => {
        dispatch({ type: 'game/GET_RANDOM_WORD' });
    }
    useEffect(() => {
        // call once when component loaded to check user is exist ot not
        if (userEmail) {
            dispatch({
                type: 'game/GET_GAME_DATA',
                userEmail
            });
        }
        getRandomWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // call when random word get and game data not found
        if (!isFoundData && randomWordData && randomWordData.length) {
            createAndSendGame()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFoundData, randomWordData])

    useEffect(() => {
        // to set the game data in state
        myStateRef.current = gameData;
        setGameState(gameData);
        setLoading(false);
    }, [gameData])


    // method to call when user press key
    const handleUserKeyPress = useCallback(event => {
        if (
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (event.keyCode >= 97 && event.keyCode <= 122)
        ) {
            handleGuesses(event.key);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        // add listner for keydown
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // method to call api to create and save new game
    const createAndSendGame = () => {
        const newWord = randomWordData[0].word
        dispatch({
            type: 'game/SET_NEW_GAME',
            'secretWord': makeLetters(newWord),
            'missesAllowed': 6,
            'win': false,
            'lost': false,
            'letters': makeLetters('abcdefghijklmnopqrstuvwxyz'),
            'fullWord': newWord,
            email: userEmail,
            definition: randomWordData[0].definition
        });
    }

    // call api when user select word to update the game data
    const checkForEndOfGame = (newGameState) => {
        newGameState.win = _.reduce(newGameState.secretWord, (memo, letter) => memo && letter.chosen, true);
        if (newGameState.win === false && newGameState.missesAllowed === 0) {
            newGameState.lost = true;
            notification.info({
                message: 'You lost!'
            });
        }
        if (newGameState && newGameState.win) {
            notification.info({
                message: 'You won!'
            });
        }
        dispatch({
            type: 'game/UPDATE_GAME_DATA',
            'secretWord': newGameState.secretWord,
            'missesAllowed': newGameState.missesAllowed,
            'win': newGameState.win,
            'lost': newGameState.lost,
            'letters': newGameState.letters,
            'fullWord': newGameState.fullWord,
            email: newGameState.email,
            id: newGameState._id,
            definition: newGameState.definition
            /* eslint no-underscore-dangle: 0 */
        });
    };

    // call when user click on keyboard
    const handleGuesses = key => {
        let newGameState = { ...myStateRef.current };
        if (!newGameState.win && !newGameState.lost) {
            const guess = newGameState.letters.filter(x => x.name === key);
            guess[0].chosen = true;
            let found = false;

            _.each(newGameState.secretWord, (letter) => {
                if (guess[0].name.toUpperCase() === letter.name.toUpperCase()) {
                    letter.chosen = true;
                    found = true;
                }
            });

            if (found === false) {
                newGameState = { ...newGameState, missesAllowed: newGameState.missesAllowed - 1 };
                setGameState(newGameState);
                myStateRef.current = newGameState;
            }
            checkForEndOfGame(newGameState);
        }
    };

    // call when user start a new game
    const handleReset = () => {
        setLoading(true);
        dispatch({ type: "game/RESET_GAME_DATA" });
        if (Object.keys(randomWordData).length === 0) {
            getRandomWord();
        }
    };


    const { letters, lost, win } = gameState;
    
    if (gameState && (letters && letters.length === 0) || !letters || loading) {
        return <Loader />;
    }
    return (
        <div className='Hangman'>
            <Header gameState={gameState} totalMistakes={totalMistakes} />
            <div className='main'>
                <Hangman gameState={gameState} totalMistakes={totalMistakes} />
                <div className='right'>
                    <Keyboard gameState={gameState} handleGuesses={handleGuesses} />
                    {win || lost ? <NewGameButton handleReset={handleReset} /> : null}

                </div>
                <EndGame gameState={gameState} />
            </div>
        </div>
    );

}

export default connect(mapStateToProps)(Game);
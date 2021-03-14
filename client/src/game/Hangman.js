import React from 'react';
import step0 from '../images/0.jpg';
import step1 from '../images/1.jpg';
import step2 from '../images/2.jpg';
import step3 from '../images/3.jpg';
import step4 from '../images/4.jpg';
import step5 from '../images/5.jpg';
import step6 from '../images/6.jpg';

const imagesArray = [step0, step1, step2, step3, step4, step5, step6];

// method to add the spaces or word
const currentWord = (secretWord) =>
    secretWord && secretWord.length && secretWord.map((letter) => letter.chosen ? letter.name : "_");

// component to show the hangman image if user guess wrong word
const Hangman = ({ gameState: { missesAllowed, lost, secretWord, fullWord, definition }, totalMistakes }) => {

    const altText = `${missesAllowed}/${totalMistakes} wrong guesses`;

    return (
        <div className='left'>
            <div className='showimg'>
                <img src={imagesArray[totalMistakes - missesAllowed]} alt={altText} />
            </div>
            <div className='output-area'>
                <p>Guess the word which means {definition}?</p>
                <p className='letters'>
                    {!lost ? currentWord(secretWord) : fullWord}
                </p>
            </div>
        </div>
    )
}

export default Hangman;
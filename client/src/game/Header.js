import React from 'react'

// component to show the header and wrong gusses
const Header = ({ gameState: { missesAllowed, email }, totalMistakes }) =>
    <nav className='top'>
        <a className='title'>
            Hangman by SourceFuse
        </a>
        <div  className='wrong-guesses'>{email}</div>
        <div className='wrong-guesses'>
            Guessed wrong: {totalMistakes - missesAllowed}
        </div>
    </nav>


export default Header;
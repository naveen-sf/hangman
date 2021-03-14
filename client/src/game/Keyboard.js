import React from 'react'

// component to render the keyboard
const Keyboard = ({ gameState: { letters, win, lost }, handleGuesses }) => {

    const generateButtons = (
        letters && letters.length && letters.map(letter => (
            <button
                disabled={letter.chosen || win || lost}
                type="button"
                key={letter.name}
                value={letter.name}
                onClick={e => handleGuesses(e.target.value)}
                className='btn'>
                {letter.name}
            </button>
        ))
    )
    return (
        <div>{generateButtons}</div>
    )
}

export default Keyboard;

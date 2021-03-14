import React from "react";

// component to show the user message either win or lost
const EndGame = ({ gameState: { lost, win, missesAllowed } }) =>
    <div className="right_msg">
        <p>
            {!win && !lost ? <span>You have {missesAllowed} guesses remaining.</span> : null}
            {win ? <span>Well done you won the game!</span> : null}
            {lost ? <span>Sorry, you lost the game please try again!.</span> : null}
        </p>
    </div>


export default EndGame;
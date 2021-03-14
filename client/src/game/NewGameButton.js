import React from "react";
import { Button } from 'antd';

// component to render new game button
const NewGameButton = ({ handleReset }) =>
    <Button type="primary" className='btn-reset' onClick={handleReset}>
        New Game
        </Button>


export default NewGameButton;
import { notification } from 'antd';
import apiClient from './axios';

// api calling to get game data on basis of user email
export async function getGameData({
    userEmail
}) {
    return apiClient
        .get(`/getGameStates/${userEmail}`)
        .then(response => {
            if (!response) {
                throw new Error('No response').message;
            }
            const { data = {}, isError, errorDetails = 'Something went wrong' } = response;
            if (isError) {
                throw errorDetails;
            }
            if (data) {
                return data;
            }
            return false;
        })
        .catch(err => {
            notification.error({
                message: 'Game Data not Found',
                description: err,
            });
            console.error(err);
        });
}

// api calling to set a new game data
export async function setNewGameData({
    secretWord, missesAllowed, win = false, lost = false, letters, fullWord, email, definition
}) {

    return apiClient
        .post(`/setupNewGame`, {
            secretWord, missesAllowed, win, lost, letters, fullWord, email, definition
        })
        .then(response => {
            if (!response) {
                throw new Error('No response').message;
            }
            const { data = {}, isError, errorDetails = 'Something went wrong' } = response;
            if (isError) {
                throw errorDetails;
            }
            if (data) {
                return data;
            }
            return false;
        })
        .catch(err => {
            notification.error({
                message: 'Data Failed',
                description: err,
            });
            console.error(err);
        });
}

// api calling to update the game data on basis of id
export async function updateGameData({
    secretWord, missesAllowed, win = false, lost = false, letters, fullWord, email, id, definition
}) {

    return apiClient
        .put(`/updateGame/${id}`, {
            secretWord, missesAllowed, win, lost, letters, fullWord, email, definition
        })
        .then(response => {
            if (!response) {
                throw new Error('No response').message;
            }
            const { data = {}, isError, errorDetails = 'Something went wrong' } = response;
            if (isError) {
                throw errorDetails;
            }
            if (data) {
                return data;
            }
            return false;
        })
        .catch(err => {
            notification.error({
                message: 'Data Failed',
                description: err,
            });
            console.error(err);
        });
}

// api to get the random word
export async function getRandomWordData() {
    return apiClient
        .get(`https://random-words-api.vercel.app/word`)
        .then(response => {
            if (!response) {
                throw new Error('No response').message;
            }
            const { data = {}, isError, errorDetails = 'Something went wrong' } = response;
            if (isError) {
                throw errorDetails;
            }
            if(data === "Something Went Wrong - Enter the Correct API URL"){
                notification.error({
                    message: 'Enter the Correct API URL for random word'
                });
            }
            if (data) {
                return data;
            }
            return false;
        })
        .catch(err => {
            notification.error({
                message: 'Game Data not Found',
                description: err,
            });
            console.error(err);
        });
}

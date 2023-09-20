// websocketMiddleware.ts
import { Dispatch } from 'redux';
import { setSocket, setRandomNumber } from './websocketSlice';

export const createWebSocket = () => (dispatch: Dispatch, getState: () => any) => {
  const socket = new WebSocket('ws://localhost:3001');

  socket.onopen = () => {
    console.log('WebSocket connection opened');
    dispatch(setSocket(socket));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const { randomNumber } = getState().websocket;

    // Create the new randomNumber object based on the comparison with the previous data
    const newRandomNumber = {
      color:
        randomNumber && randomNumber.currentValue !== null
          ? randomNumber.currentValue < data
            ? 'green-500'
            : randomNumber.currentValue > data
            ? 'red-500'
            : 'white'
          : 'white',
      currentValue: data,
    };

    dispatch(setRandomNumber(newRandomNumber));
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
    // Optionally dispatch an action to handle WebSocket closure
  };
};

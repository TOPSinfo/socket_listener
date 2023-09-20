// websocketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WebsocketState {
  socket: WebSocket | null;
  randomNumber: {
    color: string | null;
    currentValue: number;
  } | null;
}

const initialState: WebsocketState = {
  socket: null,
  randomNumber: {
    color: 'text-green-500',
    currentValue: 0,
  },
};

const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<WebSocket | null>) => {
      state.socket = action.payload;
    },
    setRandomNumber: (state, action: PayloadAction<{ color: string | null; currentValue: number } | null>) => {
      state.randomNumber = action.payload;
    },
  },
});

export const { setSocket, setRandomNumber } = websocketSlice.actions;

export default websocketSlice.reducer;

## Getting Started

Before, run the development server:
 
start the websoket server manually, it should run on port 3001 (Default) , socket end point can be changed from /config/config.ts directory

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

run test case
```bash
npm run test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure
* pages/ - Contains the Next.js pages.
* components/ - Contains React components, including the one responsible for displaying the received numbers.
* redux/ - Contains Redux-related files, including Redux Toolkit setup, actions, reducers, and the store configuration.
* websocket/ - Contains WebSocket implementation and related logic.

## Styling
* The application uses Tailwind CSS for styling. You can customize the styles in the tailwind.config.js file and use Tailwind utility classes to style your components. Feel free to modify the styles to match your preferences and design requirements.

## WebSocket Implementation
* The WebSocket communication is implemented in the redux/features/websocketMiddelware/ directory. The client establishes a WebSocket connection to the server, which received random numbers every 100ms. 

## Redux Integration
* Redux is integrated into the project using Redux Toolkit. The Redux store is configured in the redux/store.js file, and actions and reducers are defined in the appropriate files within the redux/ directory. The WebSocket data is stored in the Redux state for easy access and display.

## Conditional Text Color
The text color of the displayed number changes based on the following conditions:
* When the new value is greater than the previous one, it changes to green.
* When the new value is lower than the previous one, it changes to red.
* If the new value is the same as the previous one, it changes to white.

These conditions are implemented in the client-side component


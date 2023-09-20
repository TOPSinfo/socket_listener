import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Websocket from "@/app/page";
import { createWebSocket } from "@/redux/features/websocketMiddleware";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Websocket component", () => {
  it("renders correctly with random number color and value", async () => {
    const store = mockStore({
      websocket: {
        randomNumber: {
          currentValue: 42,
          color: "red-500",
        },
      },
    });

    // Mock the asynchronous action using redux-mock-store

    render(
      <Provider store={store}>
        <Websocket />
      </Provider>
    );
    expect(screen.getByText("42")).toBeInTheDocument();

    // Check if the CSS class is applied correctly
    const numberElement = screen.getByText("42");
    expect(numberElement).toHaveClass("text-red-500");

    // You can also wait for the async action to complete (if it's being called)
    await screen.findByText("42");
  });
});

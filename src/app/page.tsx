"use client";
import { createWebSocket } from "@/redux/features/websocketMiddleware";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

export default function Websocket() {
  const dispatch = useAppDispatch();
  const randomNumber = useAppSelector(
    (state: any) => state.websocket.randomNumber
  );
  
  useEffect(() => {
    dispatch(createWebSocket());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p
          className={`text-4xl ${
            randomNumber?.color === "white"
              ? "text-white"
              : randomNumber?.color === "red-500"
              ? "text-red-500"
              : "text-green-500"
          } text-${randomNumber?.color}`}
        >
          {randomNumber?.currentValue}
        </p>
      </div>
    </div>
  );
}

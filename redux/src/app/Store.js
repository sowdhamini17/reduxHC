import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todoSlice"

export const Store = configureStore({
    reducer:todoReducer,
}) 
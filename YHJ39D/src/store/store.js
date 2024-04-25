import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./reducers/peopleSlice";

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {};

const store = configureStore({
    reducer: {
        people: peopleSlice
    },
    preloadedState: persistedState
});

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
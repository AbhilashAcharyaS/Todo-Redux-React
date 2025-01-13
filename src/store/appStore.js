import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice"

const appStore= configureStore({
    reducer:{
        todos:todoSlice
    }
})

export default appStore;
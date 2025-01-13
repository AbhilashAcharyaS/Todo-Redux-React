import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice"

const appStore= configureStore({
    reducer:{
        todos:todoSlice
    },
    preloadedState:loadFromLocalStorage()
});

function saveToLocalStorage(state){

    try{
      const serialState = JSON.stringify(state)
      localStorage.setItem("reduxStore",serialState)
    }catch(e){
      console.warn(e);
    }
  }
  
  function loadFromLocalStorage(){

    try{
      const serialisedState = localStorage.getItem("reduxStore");
      if(serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    }catch(e){
      console.warn(e);
      return undefined;
    }
  }

  appStore.subscribe(()=>saveToLocalStorage(appStore.getState()));

export default appStore;
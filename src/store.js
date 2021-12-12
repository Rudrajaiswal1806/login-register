import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./component/ProductSlice";

export default configureStore({
    reducer: {      
      products: productReducer,      
           
    },
  });
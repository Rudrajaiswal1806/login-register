import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        product: [],
        login:{},
        
    }
  
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  
  reducers: {

    setProduct: (state, action) => {
        return {
            ...state,
            product: [
                ...state.product,
                ...action.payload
            ]
        }
    },
        
    setLogin: (state, action) => {
        return {
            ...state,
            login: {
                ...state.login,
                ...action.payload
            }
        }
    },

    
        
  }
});

export const {setProduct, setLogin} = ProductSlice.actions;

export default ProductSlice.reducer;
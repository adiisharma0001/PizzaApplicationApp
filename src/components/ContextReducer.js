import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
 const CartDispatchContext = createContext(); 

 const reducer = (state,action)=>{

 }

export const CardProvider =({children})=>{

    const [state,dispatch] = useReducer()
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartDispatchContext.Provider>
                {children  }
            </CartDispatchContext.Provider>
        </CartDispatchContext.Provider>

    )

   
}

export const useCart = () =>useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);
// it is link with App.js
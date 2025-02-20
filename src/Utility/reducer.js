import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user:null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET: {
        const itemIndex = state.basket.findIndex(
            (item) => item.id === action.item.id
        );
        if (itemIndex >= 0) {
            const updatedBasket = [...state.basket];
            updatedBasket[itemIndex] = {
            ...updatedBasket[itemIndex],
            quantity: updatedBasket[itemIndex].quantity + 1,
            };
            return { ...state, basket: updatedBasket };
        } else {
            return {
            ...state,
            basket: [...state.basket, { ...action.item, quantity: 1 }],
            };
        }
        }

        case Type.INCREMENT_QUANTITY: {
        const updatedBasket = state.basket.map((item) =>
            item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, basket: updatedBasket };
        }

        case Type.DECREMENT_QUANTITY: {
          const updatedBasket = state.basket.map((item) =>
            item.id === action.id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          );
          return { ...state, basket: updatedBasket }; //updatedBasket they use newBasket for class
        };

        //FOR AUTH PART
        case Type.SET_USER:
            return {
            ...state,
            user:action.user,
        };

        default:
        return state;
    }
};






























// import {Type} from './action.type'

// export const initialState = {
//     basket:[]
// }


// export const reducer = (state, action) => {
//     switch (action.type) {
//         case Type.Add_TO_BASKET:
//             return {
//                 ...state,
//                 basket:[...state.basket,action.item]
//             }
    
//     default:
//     return state;
//     }
// }





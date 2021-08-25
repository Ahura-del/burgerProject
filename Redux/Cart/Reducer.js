import {ADD_CART, DECREASE, DEL_CART} from './Type';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let cartState = state.cart.find(item => item.id === action.payload.id);
      let cart = state.cart.slice();
      let save = [];
      if (cartState) {
        let cartState1 = state.cart.find(item => item.id === action.payload.id);

        let test = {};

        cart.forEach(item => {
          if (item.id === cartState1.id) {
            test = {
              count: cartState1.count++,
              name: item.name,
              id: item.id,
              info: item.info,
              price: item.price,
              pic: item.pic,
            };
            save.push(test);
          }
        });
        cart.concat(save);

        return {
          ...state,
          cart: cart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    //  Delete

    case DEL_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    // Decrease

    case DECREASE:
      let cartStateDecrease = state.cart.find(
        item => item.id === action.payload.id,
      );
      let cartDecrease = state.cart.slice();
      let saveDecrease = [];
      if (cartStateDecrease) {
        let cartState2 = state.cart.find(item => item.id === action.payload.id);

        let testDecrease = {};

        cartDecrease.forEach((item, index) => {
          if (item.id === cartState2.id) {
            testDecrease = {
              count: cartState2.count--,
              name: item.name,
              id: item.id,
              info: item.info,
              price: item.price,
              pic: item.pic,
            };
            saveDecrease.push(testDecrease);
          }
          if (cartState2.count == 0) {
            cartDecrease.splice(index, 1);
          }
        });
        cartDecrease.concat(saveDecrease);

        return {
          ...state,
          cart: cartDecrease,
        };
      }
  
    default:
      return state;
  }
};

export default cartReducer;

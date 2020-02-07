// Import actions
import {ADD_ITEM, REMOVE_ITEM} from '../actions/Actions'

// Create Initial State
export const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };

// Write Redudcer
// Add items to car
// Remove items from car
export const carsReducer =(state = initialState, action) =>{
    switch(action.type) {
        case ADD_ITEM:
            return{
              // spread InitialState object
              ...state,
              // for the variable additionalPrice
              additionalPrice:
              (state.additionalPrice + action.payload.price),
              car: {
                // spread car object
                ...state.car,
                  // For Features Variable inside car
                    features:
                    // Does car features include the feature ?
                     (state.car.features.includes(action.payload) ?
                      // If it does return car features
                     [...state.car.features] :
                    //  else return car features with new feature
                      [...state.car.features, action.payload])
              }
            }
          case REMOVE_ITEM :
            console.log("delete", action)
            
            return {
              ...state,
              additionalPrice:
             
              state.additionalPrice - action.payload.price,
               
              car: {
                ...state.car,
                features:
                state.car.features.filter(item => item.id !== action.payload.id), 
                }
              }

            
        default:
            return state;    
    }
}
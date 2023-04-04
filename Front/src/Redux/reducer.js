import { AGREGAR, ELIMINAR, FILTER, ALL_FILTER, ORDER } from "../Redux/Actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR: {
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        }
        case ELIMINAR: {
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (ids) => ids.id !== action.payload
                )
            }
        }
        case FILTER: {
            const { allCharacters } = state;
            const { gender } = action.payload;
            const filteredFavorites = allCharacters.filter(
                (character) => character.gender === gender
            );
            return{
                ...state,
                myFavorites: [...filteredFavorites]
            };
        }
        case ALL_FILTER: {
            const { allCharacters } = state;
            return {
                ...state,
                myFavorites: [...allCharacters]
            }
        }
        case ORDER: {
            const { allCharacters } = state;
            const sortedFavorites = action.payload === "Ascendente" ? allCharacters.slice().sort((a, b) => a.id - b.id) : allCharacters.slice().sort((a, b) => b.id - a.id);
            return {
                ...state,
                myFavorites: sortedFavorites
            };
        }
        default: {
            return {...state}
        }
    }
}

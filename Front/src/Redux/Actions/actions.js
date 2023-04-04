import { AGREGAR, ELIMINAR, FILTER, ALL_FILTER, ORDER } from "./types";

export function addFavCharacter(character){
    return {
        type: AGREGAR,
        payload: character
    }
}

export function deleteFavCharacter(id){
    return{
        type: ELIMINAR,
        payload: id
    }
}

export function filterCards(gender){
    if(gender === "All"){
        return{
            type: ALL_FILTER
        }
    }
    return{
        type: FILTER,
        payload: gender
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}
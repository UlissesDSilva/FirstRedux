import {ALTER_MIN, ALTER_MAX} from './actionsTypes'

export function alterMin(newNumer){
    return{
        type: ALTER_MIN,
        payload: newNumer
    }
}
export function alterMax(newNumer){
    return{
        type: ALTER_MAX,
        payload: newNumer
    }
}
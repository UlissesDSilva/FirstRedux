// Configurando os reducers
// 'combineReducers' combinas os reducers para gerar a store
import { createStore, combineReducers } from 'redux'

import numberReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numberReducer
    // Pode se colocar outros reducers
})

//Cria o state
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig
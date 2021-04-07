import './Intervalo.css'

import { connect } from 'react-redux'
import { alterMin, alterMax } from '../store/actions/numeros'
import React, {useState} from 'react'
import Card from './Card'

const Intervalo = (props) => {
    const {min, max} = props
    return(
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterNumberMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterNumberMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    );
};

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch){
    return{
        alterNumberMin(newNumber){
            // retorna uma action
            const action = alterMin(newNumber)
            dispatch(action)
        },
        alterNumberMax(newNumber){
            const action = alterMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
// Conecta o componente ao state da aplicação, 'devolve' o componente que tem a ligação com o state geral da aplicação
import { connect } from 'react-redux'
import React from 'react'
import Card from  './Card'

const Media = (props) => {
    const {min, max} = props
    return(
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    );
};

// Mapei o que está no state para a propriedade do componente
function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)
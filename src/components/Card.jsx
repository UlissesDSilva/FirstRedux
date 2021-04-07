import './Card.css'

import React from 'react'

function getColor(props){
    if(props.red) return "Red"
    if(props.green) return "green"
    if(props.blue) return "blue"
    if(props.purple) return "purple"
    return ""
}

export default (props) => {

    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
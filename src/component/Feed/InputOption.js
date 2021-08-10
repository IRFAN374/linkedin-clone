import React from 'react'
import '../../style/InputOption.css'


function InputOption({title, Icon, color,buttonClick}) {
    return (
        <div className="inputOption" onClick={buttonClick}>
            <Icon style={{color:color}}  />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption

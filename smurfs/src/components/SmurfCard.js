import React from 'react'


const SmurfCard = props => {

    return (
        <div>
        <h2>{props.smurf.name}</h2>
        <h3>{props.smurf.age}</h3>
        <h3>{props.smurf.height}</h3>
        <button onClick={props.removeSmurf}>Delete Smurf</button>
        </div>
    )
}

export default SmurfCard
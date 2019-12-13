import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import SmurfCard from '../components/SmurfCard'



const SmurfList = props => {
    useEffect(() => {
   props.fetchData()
    }, [])

// if (props.smurfs.length === 0){
//     return <h1>Loading...</h1>
// }


const fetchSmurf = e => {
    e.preventDefault();
    props.fetchData()
}
    return(
        <div>
           
            { props.smurfs.map(smurf => (
              <SmurfCard smurf ={smurf} key ={smurf.id}/> 
            ))}
            <button onClick={fetchSmurf}>Fetch Smurf</button>
        </div>
    )
}

const mapStateToProps = state => (
    {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
)


export default connect(mapStateToProps, { fetchData })(SmurfList)
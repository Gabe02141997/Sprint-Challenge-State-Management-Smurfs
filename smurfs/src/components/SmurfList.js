import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData, deleteSmurf } from '../actions/actions'
import SmurfCard from '../components/SmurfCard'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const SmurfList = props => {

    const classes = useStyles();

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


const deletePerson = id => {
    
    props.deleteSmurf(id)
}
    return(
        <div>
            <div>
            <Button variant ='contained' color ='secondary'onClick={fetchSmurf}>Fetch Smurf</Button>
            </div>
            { props.smurfs.map(smurf => (
              <SmurfCard smurf ={smurf} key ={smurf.id} removeSmurf={() =>deletePerson(smurf.id) }/> 
            ))}
        
        </div>
    )
}

const mapStateToProps = state => (
    {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
)


export default connect(mapStateToProps, { fetchData, deleteSmurf })(SmurfList)
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addSmurf,  } from '../actions/actions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


// const SubContainer = styled.div`



// `

// const FormContainer= styled.form`



// `




const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const SmurfForm = props => {
    const classes = useStyles();

    
    const [smurfForm, setSmurfForm] = useState({
        
        name: '',
        age: Number,
        height: '' })

 
   const changeHandler = e => {
       setSmurfForm({...smurfForm, [e.target.name]: e.target.value})
   }


   const submitSmurf = e => {
   e.preventDefault();
   props.addSmurf(smurfForm)

   }


   return (
       <div>
           <form onSubmit ={submitSmurf} className={classes.root} noValidate autoComplete='off'>
          
               <TextField id ='outlined-basic'type ='text' name='name' value ={smurfForm.name} onChange={changeHandler} label='Name' variant = 'outlined'/> 
               <TextField id ='outlined-basic'type ='text' name='age' value ={smurfForm.age} onChange={changeHandler} label ='Age'
               variant='outlined'/> 
               <TextField id ='outlined-basic'type ='text' name='height' value ={smurfForm.height} onChange={changeHandler} label ='Height'
               variant='outlined'/> 
               <Button variant='contained' color='primary' onClick={submitSmurf}>Add Smurf</Button>
               
        </form>
       </div>
   )
}

export default connect(null, { addSmurf, })(SmurfForm); 
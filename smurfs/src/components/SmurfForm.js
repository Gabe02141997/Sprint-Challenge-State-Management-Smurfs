import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addSmurf,  } from '../actions/actions'


const SmurfForm = props => {
   
    
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
           <form onSubmit ={submitSmurf}>
               <input type ='text' name='name' value ={smurfForm.name} onChange={changeHandler} placeholder='Name'/> 
               <input type ='text' name='age' value ={smurfForm.age} onChange={changeHandler} placeholder ='Age'/> 
               <input type ='text' name='height' value ={smurfForm.height} onChange={changeHandler} placeholder ='Height'/> 
               <button>Add Smurf</button>
           </form>
       </div>
   )
}

export default connect(null, { addSmurf, })(SmurfForm); 
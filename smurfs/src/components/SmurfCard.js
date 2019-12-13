import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
      minWidth: 50,
      maxWidth: 356,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      margin: '0 auto'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      textAlign: 'center'
    },
    pos: {
      marginBottom: 12,
    },
  });

const SmurfCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.smurf.name}
        </Typography>
        <Typography variant="body2" component="p">
         {props.smurf.age} <br/>
         {props.smurf.height}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.removeSmurf}>Learn More</Button>
      </CardActions>
      </Card>
    )
}

export default SmurfCard


// <div>
//         <h2>{props.smurf.name}</h2>
//         <h3>{props.smurf.age}</h3>
//         <h3>{props.smurf.height}</h3>
//         <button onClick={props.removeSmurf}>Delete Smurf</button>
//         </div>


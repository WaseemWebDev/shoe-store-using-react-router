import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoes from '../Shoes.json';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function ProductItem() {
    const classes = useStyles();
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div className={classes.root}>
<center><h1>Specific Product</h1></center>
      <Grid container justify="center" >
        <Grid item xs={10} >
          <Paper elevation={4} className={classes.paper}><h4>{shoe.name}</h4>
                <img src={shoe.img} className="img" height={600} style={{width:"40%"}}  alt="shoe" /></Paper>
        </Grid>
        </Grid>
        </div>
      
    );
}
import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Shoes from "../Shoes.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'center',


    },
    text: {
        maxWidth: 200,
        height: 6,
    }

}));

export default function ShoesList() {
    const classes = useStyles();
    return (
        <div>
            <center>
                <Typography variant="h2" component="h2">
                    Shoes List
        </Typography>
                <Divider className={classes.text} />
            </center>
            <br />
            <div className={classes.root} >

                <Grid container justify="center"  mx="auto"  >
                    <Grid item md={12} sm={12}  lg={10} >
                        <Grid container spacing={4} >
                            {Object.keys(Shoes).map((keyName) => {
                                const shoe = Shoes[keyName];
                                return (
                                    <Grid lg={3} md={6} sm={6}  key={keyName} item>
                                        <Link key={keyName} className="link" to={`/product/${keyName}`}>
                                            <img src={shoe.img} height={330} alt="shoe" style={{ width: "83%" }} />
                                            <h4>{shoe.name}</h4>
                                        </Link>
                                    </Grid>
                                );
                            })}
                        </Grid>

                    </Grid>


                </Grid>
            </div>
        </div>
    );
}

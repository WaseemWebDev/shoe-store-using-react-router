import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoesList from './shoesList';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 600,
    display: "flex",
    alignItems: "center",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',

  },
  mainFeaturedPostContent: {
    position: 'relative',
    left: 200,
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
const mainFeaturedPost = {
  title: 'Shoe store using react router',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://cdna.artstation.com/p/assets/images/images/016/792/564/original/3d-ace-studio-3d-ace-studio-shoes1-2.gif?1553507698',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Home(props) {
  const classes = useStyles();
  const post = mainFeaturedPost;

  return (
    <>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
        {/* Increase the priority of the hero background image */}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={`main-text ${classes.mainFeaturedPostContent}`}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Button variant="contained" size="large"  >
                Explore Shoes
        </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
       <ShoesList />
    </>
  );
}

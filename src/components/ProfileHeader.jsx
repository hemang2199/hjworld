import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import my_pic1 from "../images/back2.jpg"
import my_pic2 from "../images/pic2.jpg"
import my_pic5 from "../images/pic5.JPG"
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),},
  },
  root_link: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


 function ProfileHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm"  component="main" className={classes.heroContent}>
     
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hemang Joshi 
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Python developer | passionate Web developer <br/> always a learner 
        </Typography>
      </Container>
      {/* End hero unit */}

    <div className={classes.root_link}>
        <ButtonBase
          focusRipple
          key="resume"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
        >
          <Link to="/resume"  style={{ color: "white", textDecoration: "none", fontWeight: "bold", }}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${my_pic1})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              
                Resume
              
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>

        <ButtonBase
          focusRipple
          key="About ME"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '40%',
          }}
        >
          <Link to="/about"  style={{ color: "white", textDecoration: "none", fontWeight: "bold", }}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${my_pic5})`,
        
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              
                About Me
             
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>

        <ButtonBase
          focusRipple
          key="Contact"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
        >
           <Link to="/contact"  style={{ color: "white", textDecoration: "none", fontWeight: "bold", }}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${my_pic2})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
            
               Contact
             
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>
        

    <Container maxWidth="sm"  component="main" className={classes.heroContent}>

     <Typography component="h5" variant="h4" align="center" color="textPrimary" gutterBottom>
     " When you are you , you shine so bright , that no shadow can dim your light " 
     </Typography>
   </Container>
      
    </div>
        
    </React.Fragment>
    
  );
}

export default ProfileHeader;
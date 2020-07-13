import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
  
}));


 function Header(props) {
  const classes = useStyles();

  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link to="/hemang-world" style={{ color: "blue", textDecoration: "none", fontWeight: "bold", }}>
           Hemang's World 
           </Link>
          </Typography>
          
          <nav>
            <Button variant="contained" color="primary">
              <a href="https://www.linkedin.com/in/hemang-joshi-54569513a" rel="noopener noreferrer" target="_blank" style={{ color: "white", textDecoration: "none", fontWeight: "bold", }}>
              Linkedin
              </a>
            </Button> 
            <Button variant="contained" style={{marginLeft:'6px'}} >
              <a href="https://github.com/hemang05" rel="noopener noreferrer" target="_blank" style={{ color: "black", textDecoration: "none", fontWeight: "bold", }}>
              Git Hub
              </a>
            </Button>
            
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    
  );
}

export default Header;
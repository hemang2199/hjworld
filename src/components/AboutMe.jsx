import React from "react";
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import react_logo from '../images/react.png'
import python_logo from '../images/python.png'
import ds_logo from  '../images/dsa.png'
import sih_logo from '../images/sih.jpg'
import skit_logo from '../images/skit.jpg'
import iitr_logo from '../images/iitr.png'
import infy_logo from '../images/infy.png'
import aps_logo from '../images/aps.png'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    marginLeft:'140px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


 function AboutMe() {
  const classes = useStyles();
  
    return (
      <div>
          <Typography variant="h3" style={{color:'green',marginLeft:'2px'}} gutterBottom>
           Graduation
          </Typography>
          <p style={{ marginLeft:'30px'}}> I am final year B.Tech Student from <b>SKIT,Jaipur</b> (2016-2020). With Aggregate 73% till 7th sem i have been <br>
          </br> a multi dimensional student through out .</p><br>
          </br>
          <Typography variant="h4" style={{color:'blue',marginLeft:'2px'}} gutterBottom>
           Skills 
          </Typography>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ReactJS" src={react_logo} />
        </ListItemAvatar>
        <ListItemText
          primary="ReactJs"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {"More than 6 month of experience working on Live Project"}
              {" -developed this personal website using ReactJs"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Python" src={python_logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Python"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {" 3 star coder at Hacker Rank ...still learning everyday"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ds" src={ds_logo}/>
        </ListItemAvatar>
        <ListItemText
          primary="Data Structures"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {' Never ending love for linked list ... always a learner for dsa'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          
          <br></br>
          <Typography variant="h4" style={{color:'blue',marginLeft:'2px'}} gutterBottom>
            Achievements 
          </Typography>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sih" src={sih_logo} />
        </ListItemAvatar>
        <ListItemText
          primary="SIH -2018"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {"Amongst top-20 participant in india to provide solution to problem statement"}
              {" -participated in 36 hours of sih-software edition competition"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cognizance" src={iitr_logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Cognizance-IITR"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {"Zonal coordinator of technical workshop at Jaipur for two years"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="skit" src={skit_logo}/>
        </ListItemAvatar>
        <ListItemText
          primary="Pravah 2017,2018"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {'Co-ordinator at college Annual Fest'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          
    <Typography variant="h4" style={{color:'blue',marginLeft:'2px'}} gutterBottom>
            Campus Placements 
    </Typography><br></br>
    <img src={infy_logo} alt="infosys" style={{width:'180px',height:'120px',backgroundSize:'cover',marginLeft:'40px'}}></img><br></br> 
    <img src={aps_logo} alt="app perfect" style={{width:'180px',height:'120px',backgroundSize:'cover',marginLeft:'40px'}}></img> 
      </div>
    );
  }




export default (withRouter(AboutMe));

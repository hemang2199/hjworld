import React from "react";
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br></br>
        <Typography variant="h4" style={{color:'blue'}} gutterBottom>
           connect with me ...!
        </Typography><br></br>
        <Typography variant="h6" style={{color:'blue'}} gutterBottom>
           hemang2199@gmail.com <br></br>
           +91-7742578535
        </Typography>
        
        </center>
      </div>
    );
  }
}



export default (withRouter(Contact));

import React from "react";
import { withRouter } from 'react-router-dom'
import resume from '../images/resume_1.jpg'
import my_pic from '../images/my_pic.jpg'
import my_pdf from '../images/resume.pdf'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div>
         <Link to={my_pdf} target="_blank" style={{ color: "white", textDecoration: "none", fontWeight: "bold", }}  download marginLeft="2px">
         <Button variant="contained" color="primary" download>
          Download pdf
         </Button>
         </Link>
      
      </div>
      <div>
      <img src={resume} alt="my-resume" width="900px" height="700px" />
      <img src={my_pic} alt="my-pic" height="500px" width="300px" marginLeft="2px"  />  
      </div>
      </div>
    );
  }
}



export default (withRouter(Resume));


import React from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import Resume from './components/Resume'
import {ProfileHeader} from './components/index'
import Header from './components/header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
            <Header/>
            <Route exact path="/hjworld" component={ProfileHeader} />
            <Route exact path="/hemang-world" component={ProfileHeader} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            
          </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

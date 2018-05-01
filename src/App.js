import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import logo from './logo.svg';
import NavbarContainer from './App/Navbar/NavbarContainer'
import SectionContainer from './App/Section/SectionContainer'
import './App.css';
import './css/main.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarContainer />
          <Grid>
            <SectionContainer id_string="home" />
            <SectionContainer id_string="aboutUs" />
            <SectionContainer id_string="embroidery" />
            <SectionContainer id_string="screenPrinting" />
          </Grid>
          <h1>Test</h1>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(App);

// <NavBar />
//           <Route exact path='/' component={}/>
//           <Grid>
//             <Route exact path='/' component={} />
//             <Switch>
//               <Route path={'/shelters/new'} component={} />
//               <Route path={'/shelters/:shelterId'} component={} />
//             </Switch>
//           </Grid>
          
//           <Grid>
//             {//SocialMediaLinks}
//             }
//           </Grid>
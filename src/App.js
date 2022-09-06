import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import Portfolio from './pages/Porfolio';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} >
            <Profile />
          </Grid>
          <Grid item xs style={{backgroundColor:"blue"}} >
           <Header />
           <Router>
            <Routes>
            <Route path="/" element={<Portfolio />}>
            </Route>
            </Routes>

            <Routes>
            <Route path="/Resume" element={ <Resume />}>
            </Route>
            </Routes>
          


           </Router>
           <Footer />
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;

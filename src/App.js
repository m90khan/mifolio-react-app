import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
// allows components to animate when they are removed from the tree
import { AnimatePresence } from 'framer-motion';

// Router

import { Switch, Route, useLocation } from 'react-router-dom';

/*
React router renders everything at front. and path allows to nly display certain content at certain url
 and switch  stops as soon as the FIRST matched url
 Implement?
 1- wrap whole app in router using {BrowserRouter}
 2- use Route to seperate url using <Route path="/" exact>

useLocation : gives key of the current page ,gives us the location of the current state of page
exitBeforeEnter : wait for current components to left , only then start next animation of the next components
*/
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0
    })
  }, [location]);

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>

        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

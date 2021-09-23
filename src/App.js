import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import ContactMe from './ContactMe/ContactMe';
import MainMenu from './Shared/MainMenu';
import { useState } from 'react';
import MyProjects from './Projects/MyProjects';


function App() {

  const [activeLink, setActiveLink] = useState('');
  const [toggleMenu, setToggleMenu] = useState(true);
  
  return (
    <Router>
      <div className="App">
        <MainMenu 
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Switch>
          <Route exact path="/">
            <Home 
            
            />
          </Route>
          <Route path="/contactme">
            <ContactMe 
            
            />
          </Route>
          <Route path="/myprojects">
              <MyProjects

              />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

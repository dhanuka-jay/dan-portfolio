import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import ContactMe from './ContactMe/ContactMe';
import MainMenu from './Shared/MainMenu';
import { useState } from 'react';


function App() {

  const [activeLink, setActiveLink] = useState('home');
  
  return (
    <Router>
      <div className="App">
        <MainMenu 
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;

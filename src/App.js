import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
   <Router>
     <Switch>
    

        <Route path="/Home">
        <Home/>
        </Route>
          <Route path="/country/:countryName">
          <CountryDetail/>
          </Route>
          <Route path="/">
                <Home/>
          </Route>       
        
     </Switch>
   </Router>
  );
}

export default App;

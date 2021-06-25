import ListPlayers from './Components/ListPlayers';
import AddPlayer from './Components/AddPlayer';
import DeletePlayer from './Components/DeletePlayer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import UpdatePlayer from './Components/UpdatePlayer';
import './App.css';



function App() {
  return (
          <div>
            <Router>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListPlayers}></Route>
                <Route path = "/students" component = {ListPlayers}></Route>
                <Route path = "/addplayer" component = {AddPlayer}></Route>
                <Route path = "/deleteplayer" component = {DeletePlayer}></Route>
                <Route path = "/updateplayer" component = {UpdatePlayer}></Route>
                
              </Switch>
            </div>
            </Router>
          
          </div>
  );
}

export default App;

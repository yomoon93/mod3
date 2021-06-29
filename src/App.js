import ListPlayers from './Components/ListPlayers';
import AddPlayer from './Components/AddPlayer';
import DeletePlayer from './Components/DeletePlayer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import UpdatePlayer from './Components/UpdatePlayer';
import Navbar from './NavBar/navbar';
import SearchPlayer from './Components/SearchPlayer';
import Footer from './Footer/Footer';
import './App.scss';


function App() {
  return (
          <div>
            <Router>
            <div className="containerr">
              <Navbar/>
              <Switch>
                <Route path = "/" exact component = {ListPlayers}></Route>
                <Route path = "/students" component = {ListPlayers}></Route>
                <Route path = "/addplayer" component = {AddPlayer}></Route>
                <Route path = "/deleteplayer" component = {DeletePlayer}></Route>
                <Route path = "/updateplayer" component = {UpdatePlayer}></Route>
                <Route path = "/searchplayer" component = {SearchPlayer}></Route>
                
              </Switch>
            </div>
            </Router>
            <Footer/>
          
          </div>
  );
}

export default App;

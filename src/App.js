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
            {/* <div className="content-wrap"> */}

         
            <Router>
            <Navbar/>


              <Switch>
                <Route path = "/" exact component = {ListPlayers}></Route>
                <Route path = "/player" component = {ListPlayers}></Route>
                <Route path = "/addplayer" component = {AddPlayer}></Route>
                <Route path = "/deleteplayer" component = {DeletePlayer}></Route>
                <Route path = "/updateplayer" component = {UpdatePlayer}></Route>
                <Route path = "/searchplayer" component = {SearchPlayer}></Route>
                
              </Switch>
         
            </Router>
            {/* </div> */}
            {/* <Footer/> */}
          
          </div>
  );
}

export default App;

import React from 'react'
import axios from 'axios';
import ListPlayers from './ListPlayers';
import PlayerService from '../Services/PlayerService';



class SearchPlayer extends React.Component{



constructor(props)
{
    super(props)
    this.state={
        email:'',
        user:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchPlayer = this.searchPlayer.bind(this)
    this.deleteItem = this.deleteItem.bind(this);
    this.getNewInfo = this.getNewInfo.bind(this);
    this.updateSite = this.updateSite.bind(this);
}



searchPlayer(){
    axios.get(`http://localhost:8081/api/searchplayer/${this.state.email}`)
    
    .then((response) => {
        console.log(response)
       this.setState({user:response.data})
    })

}
handleChange(event){
    let n = event.target.name
    let value = event.target.value
    this.setState({[n]:value})
    }
    deleteItem(event) {
        //   console.log(this.props)
        PlayerService.delete(event.target.name)
    
          //    axios.delete(`http://localhost:8081/api/player/${event.target.name}`)
          //The old way to it with the event target at the end.... other way of doing axios call without the service class
          .then((response) => {
            console.log(response);
            alert("player deleted");
            this.getNewInfo();
          });
      }
      getNewInfo() {
        PlayerService.getPlayers().then((res) => {
          this.setState({ players: res.data });
        });
      }
      updateSite(event) {
        // PlayerService.update(event.target.name)
        this.props.history.push("/updateplayer/"+ event.target.name);
        console.log(event.target.name)
      }



render(){
return(
        <div>
            <form>
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <button onClick={this.searchPlayer} type="submit">Submit</button>
            </form>
               
<div>

</div>
    <div>
        <h2 className="heading">Search List</h2>
        <div></div>
        <div className="container1">
          <h2>Players on the Website</h2>
   
          {/* <button onClick={this.searchP}>Search</button> */}
        <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">ID</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Age</div>
              <div className="col col-4">Username</div>
              <div className="col col-5">Email</div>
              <div className="col col-6">Created At</div>
            </li>


{this.state.user.map((player) => (
              <div key={player.id}>
                <li className="table-row">
                  <div className="col col-1" name="id">
                    {player.id}
                  </div>
                  <div className="col col-2" name="name">
                    {player.name}
                  </div>
                  <div className="col col-3" name="age">
                    {player.age}
                  </div>
                  <div className="col col-4" name="username">
                    {player.username}
                  </div>
                  <div className="col col-5" name="email">
                    {player.email}
                  </div>
                  <div className="col col-6" name="created_at">
                    {player.created_at}
                  </div>
                </li>
                <li className="table-row1">
                  <button name={player.id} onClick={this.deleteItem}>
                    Delete
                  </button>
              
                  <button name={player.id} onClick={this.updateSite}>Update</button>
                </li>
              </div>
            ))}
            </ul>
</div>


        </div>
        </div>


        )
    }
}
export default SearchPlayer;
import React from "react";
import PlayerService from "../Services/PlayerService";
import axios from "axios";
import "../App.scss";

class ListPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getNewInfo = this.getNewInfo.bind(this);
    this.updateSite = this.updateSite.bind(this);
    this.searchP = this.searchP.bind(this);
    // this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    this.getNewInfo();
  }
  getNewInfo() {
    PlayerService.getPlayers().then((res) => {
      this.setState({ players: res.data });
    });
  }

  searchP(){
      this.props.history.push("/searchplayer")
  }

  addPlayer() {
    this.props.history.push("/addplayer");
    console.log(this.props);
  }
  updateSite(event) {
    // PlayerService.update(event.target.name)
    this.props.history.push("/updateplayer/"+ event.target.name);
    console.log(event.target.name)
  }

  showOptions(event) {
    var target = event.target;
    var row2 = target.nextElementSibling;
    console.log(row2);
    if (row2.hidden == true) {
      row2.hidden = false;
    } else {
      row2.hidden = true;
    }
  }
//   updateItem(event){
//       PlayerService.update(event.target.name)
//       .then((response)=>{
//         console.log(response);
//     })
//   }



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

  render() {
    return (
      <div>
        <h2 className="heading">Search List</h2>
        <div></div>
        <div className="container1">
          <h2>Players on the Website</h2>
       
   
          <button className="btn-primary-one" onClick={this.searchP}>Search</button>
          <button className="btn-primary-one" onClick={this.addPlayer}>Add</button>
          
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">ID</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Age</div>
              <div className="col col-4">Username</div>
              <div className="col col-5">Email</div>
              <div className="col col-6">Created At</div>
            </li>

            {this.state.players.map((player) => (
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
                  <button className="btn-primary-two" name={player.id} onClick={this.deleteItem}>
                    Delete
                  </button>
               
                  <button className="btn-primary-two" name={player.id} onClick={this.updateSite}>Update</button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default ListPlayers;

import React from 'react'
import PlayerService from '../Services/PlayerService'
import '../App.scss'

class ListPlayers extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            players:[],
            
           
        
            
        }
        this.addPlayer = this.addPlayer.bind(this);
        this.showOptions = this.showOptions.bind(this)
       
    }

    componentDidMount(){
        PlayerService.getPlayers().then((res)=>
        {
            this.setState({players:res.data}); 
        });
        
    }
    addPlayer(){
        this.props.history.push('/addplayer');
    }
  showOptions(event) {
      var target = event.target
      var row2 = target.nextElementSibling
      console.log(row2)
      if(row2.hidden == true) {
          row2.hidden = false
      }
      else {

          row2.hidden = true
        }
      
  }


    render(){
        return(
            <div>
                <h2 className="heading">Players List</h2>
                <div>
                    <button className="btn-primary" onClick={this.addPlayer}>Add Player</button>
                </div>
                    <div className = "container1">
                    
                            <h2>Players on the Website</h2>
                            <small>MoonDoc</small>
                            <ul className="responsive-table">

                            <li className="table-header">
                                <div className="col col-1">Player ID</div>
                                <div className="col col-2">Player Name</div>
                                <div className="col col-3">Player Age</div> 
                                <div className="col col-4">Player Username</div>
                                <div className="col col-5">Player Email</div>
                                <div className="col col-6">Created At</div>
                            </li>
                        
                        
                            {
                                this.state.players.map(
                                    player =>
                                    <div>

                                    <li className="table-row" key={player.id}>
                                        
                                        <div className="col col-1">{player.id}</div>
                                        <div className="col col-2">{player.name}</div>
                                        <div className="col col-3">{player.age}</div>
                                        <div className="col col-4">{player.username}</div>
                                        <div className="col col-5">{player.email}</div>
                                        <div className="col col-6">{player.created_at}</div>     
                                    </li> 
                                    <li  className="table-row1"><button>Delete</button><button>Update</button></li>
                                    </div>
                                
                                )
                            }
                        </ul>
                    </div>
                </div>
          



        )
    }



}
export default ListPlayers;
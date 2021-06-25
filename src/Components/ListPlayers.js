import React from 'react'
import PlayerService from '../Services/PlayerService'

class ListPlayers extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            players:[],
           
        
            
        }
        this.addPlayer = this.addPlayer.bind(this);
       
    }

    componentDidMount(){
        PlayerService.getPlayers().then((res)=>
        {
            const dateTime = res.data[0].created_at;
            const date = new Date(dateTime);
            const hours = date.getHours();
            // if(hours>)
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dateF = months[date.getMonth()] 
            // const days = ["Monday, Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"]
            const fullDate = `${dateF}/${date.getDate()}/${date.getFullYear()} `
            this.setState({players:res.data});
            console.log(typeof dateTime);
            console.log(res.data);
            console.log(dateTime);
            console.log(dateF);
            console.log(fullDate);
            console.log(date.getMonth());
            console.log(hours);
        });
        
    }
    addPlayer(){
        this.props.history.push('/addplayer');
    }
  


    render(){
        return(
            <div>
                <h2 className="heading">Players List</h2>
                <div>
                    <button className="btn-primary" onClick={this.addPLayer}>Add Player</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className = "row">
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>Player ID</th>
                                <th>Player Name</th>
                                <th>Player Age</th>
                                <th>Player Username</th>
                                <th>Player Email</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    player =>
                                    <tr key={player.id}>
                                        <td>{player.name}</td>
                                        <td>{player.age}</td>
                                        <td>{player.username}</td>
                                        <td>{player.email}</td>
                                        <td>{player.created_at}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        )
    }



}
export default ListPlayers;
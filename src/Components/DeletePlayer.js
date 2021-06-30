import React from 'react'
import axios from 'axios';
import ListPlayers from './ListPlayers';
import PlayerService from '../Services/PlayerService';


class DeletePlayer extends React.Component{



constructor(props)
{
    super(props)
    this.state={
        id:'',
       

    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
}



delete(){
    PlayerService.delete(this.state.id)
    .then(function(response){
        console.log(response);
        alert("player deleted");
    })
    // .then(response=> setStatus('Delete successful'))
    // .catch(error=>
    // {
    //     setErrorMessage(error.Message);
    //     console.log('There is an error!',error);
    // });
}
handleChange(event){
    let n = event.target.name
    let value = event.target.value
    this.setState({[n]:value})
    }

    deleteItem(id){
        // let id = this.state.id
        return axios.delete(`http://localhost:8081/api/player/${id}`)
    }





render(){
return(
        <div>
            <form>
                <input  type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange}/>
                <button onSubmit={this.deleteItem} onClick={this.delete} type="submit">Submit</button>
            </form>
           
        </div>


        )
    }
}
export default DeletePlayer;

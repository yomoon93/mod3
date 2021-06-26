import React from 'react'
import axios from 'axios';



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




render(){
return(
        <div>
            <form>
                <input  type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
            </form>
                <button onClick={this.searchPlayer} type="submit">Submit</button>
<div>

</div>
<div>
  {this.state.user.map(obj => 
      <h1 key={obj.id}>
          {obj.email}

      </h1>
  )}
</div>

        </div>


        )
    }
}
export default SearchPlayer;
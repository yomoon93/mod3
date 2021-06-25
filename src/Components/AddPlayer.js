import React from 'react'
import axios from 'axios';



class AddPlayer extends React.Component{



constructor(props)
{
    super(props)
    this.state={
        
        name: '',
        age:0 ,
        username:'',
        email:'',
        password:'',
     

    }
    this.handleChange = this.handleChange.bind(this)
    this.post = this.post.bind(this)
}



post(){
    axios.post('http://localhost:8081/api/addplayer',{
        name:this.state.name,
        age:this.state.age,
        username:this.state.username,
        email:this.state.email,
        password:this.state.password,
  
    })

    .then(function(response){
        console.log(response);
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
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/> 
                <input  type="number" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange}/>
                <input  type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                <input  type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                <input  type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
               
            </form>
                <button onClick={this.post} type="submit">Submit</button>
        </div>


        )
    }
}
export default AddPlayer;

import React from 'react'
import axios from 'axios'
class UpdatePlayer extends React.Component{



    constructor(props)
    {
        super(props)
        this.state={
            id:props.location.pathname.split('/')[2],
            name:'',
            username:'',
            email:'',

        }
        this.handleChange = this.handleChange.bind(this)
        this.update = this.update.bind(this)
       

    }
    
    
    
    update(){
        axios.put(`http://localhost:8081/api/player/${this.state.id}`,{
            name:this.state.name,
            username:this.state.username,
            email:this.state.email, 
            
        })
    
        .then(function(response){
            console.log(response);
            alert("Update Successful")
        })
    }
    handleChange(event){
        let n = event.target.name
        let value = event.target.value
        this.setState({[n]:value})
        }

     
    
    
    
    render(){
        // console.log(this.props)
        console.log(this.state.id)
    return(
            <div>
                <form>
                    <input  type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                    <input  type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                    <input  type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                </form>
                    <button onClick={this.update} type="submit">Submit</button>
            </div>
    
    
            )
        }
    }
    export default UpdatePlayer;
    
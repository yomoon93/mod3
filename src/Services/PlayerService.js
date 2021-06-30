import axios from 'axios'

const PLAYER_API_BASE_URL="http://localhost:8081/api";

class PlayerService{
    getPlayers(){
        return axios.get(PLAYER_API_BASE_URL + "/allplayers")
    }
    postPlayers(){
        
        return axios.post(PLAYER_API_BASE_URL+ "/allplayers")
    }
    delete(id){
        return   axios.delete(PLAYER_API_BASE_URL+"/player/"+id)
    }
    update(id){
        return  axios.put(PLAYER_API_BASE_URL+"/player/"+id)
    }
    

}
export default new PlayerService();
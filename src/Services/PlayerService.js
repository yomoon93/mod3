import axios from 'axios'

const PLAYER_API_BASE_URL="http://localhost:8081/api/allplayers";
class PlayerService{
    getPlayers(){
        return axios.get(PLAYER_API_BASE_URL)
    }
    postPlayers(){
        
        return axios.post(PLAYER_API_BASE_URL)
    }

}
export default new PlayerService();
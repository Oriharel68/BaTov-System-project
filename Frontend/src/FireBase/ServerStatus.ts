import axios from "axios";


const ServerStatus = async()=>{
    try{
    const {data} = await axios.get('http://localhost:4000/ServerStatus')
    return data;
    }catch(err){
        console.log(err);
    }
}

export default ServerStatus;
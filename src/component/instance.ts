import axios from "axios";

export const instance=(URL: string, method: string)=>{
    const url=URL;
        switch(method){
        case "GET":
            return axios.get(url)
        default : return;
    }

}

export default instance
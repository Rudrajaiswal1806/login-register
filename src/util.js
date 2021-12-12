import axios from "axios";
import config from "react-global-configuration";

export const doAjaxCall = (path,type,payload) => {
    return axios({
        method: type,
        url: config.get('dev.api_url') + path,
        data: payload,
        headers: { 'Authorization':  "Bearer " + 
                     localStorage.getItem('token')
                    // "UzM1bEtORUFNRnhkdW1yVlZJZHNra0E4SXJrZVlZbU1XQ2VjUDJiSjEwMDAy"
                }
    });
}
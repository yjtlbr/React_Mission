import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "272cc9f1b14c85cbc652a4e9c29aa12d",
        language: "ko-KR",
    }

});

export default instance
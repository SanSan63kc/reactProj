import * as axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"b4f14c7e-a857-4106-825f-7a0de08c5d4e"
    }
})



export const usersAPI={
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data
        })
    }
}
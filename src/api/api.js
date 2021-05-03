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
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Метод уже используется. Используй profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI={
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    }, 
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile){
        const formData=new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }
}

export const authAPI={
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
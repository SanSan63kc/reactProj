import { createSelector } from "reselect"


const getUsersSelector=(state)=>{
    return state.frendsPage.users
}

export const getUsers = createSelector(getUsersSelector,
    (users)=>{
    return users.filter(u=>true)
})

export const getPageSize=(state)=>{
    return state.frendsPage.pageSize
}

export const getTotalUsersCount=(state)=>{
    return state.frendsPage.totalUsersCount
}

export const getCurrentPage=(state)=>{
    return state.frendsPage.currentPage
}

export const getIsFetching=(state)=>{
    return state.frendsPage.isFetching
}

export const getFollowingInProgress=(state)=>{
    return state.frendsPage.followingInProgress
}








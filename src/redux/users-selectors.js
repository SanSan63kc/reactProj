export const getUsers=(state)=>{
    return state.frendsPage.users
}

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








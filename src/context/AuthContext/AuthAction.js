export const authFetching = () => ({
    type: "AUTH_FETCHING",
})

export const authSuccess = (user) => ({
    type: "AUTH_SUCCESS",
    payload: user
})

export const authFail = (err) => ({
    type: "AUTH_FAIL",
    payload: err
})

export const FollowUser = (userId) => ({
    type: "FOLLOW",
    payload: userId
})

export const UnfollowUser = (userId) => ({
    type: "UNFOLLOW",
    payload: userId
})
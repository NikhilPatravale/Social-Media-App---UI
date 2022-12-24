export const FollowUser = (userId) => ({
    type: "FOLLOW",
    payload: userId
})

export const UnfollowUser = (userId) => ({
    type: "UNFOLLOW",
    payload: userId
})

export const UpdateUser = (user) => ({
    type: "UPDATE_USER",
    payload: user
})
export const UserReducer = (state, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload]
                }
            }
        case "UNFOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter(item => item._id !== action.payload)
                }
            }
        default:
            return state
    }
}
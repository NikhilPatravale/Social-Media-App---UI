export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "AUTH_FETCHING":
            return {
                fetching: true,
                user: null,
                error: false
            }
        case "AUTH_SUCCESS":
            return {
                fetching: false,
                user: action.payload,
                error: false
            }
        case "AUTH_FAIL":
            return {
                fetching: false,
                user: null,
                error: action.payload,
            }
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload]
                }
            }
        case "UNFOLLOW":
            console.log("Unfollow triggered")
            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter(item => item !== action.payload)
                }
            }
        default:
            return state
    }
}
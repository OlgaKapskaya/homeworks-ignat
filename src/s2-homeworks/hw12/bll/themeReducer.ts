const initState: StateType = {
    themeId: 1,
}

type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}
export type StateType = {
    themeId: number
}
export const themeReducer = (state = initState, action: ActionType):StateType  => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

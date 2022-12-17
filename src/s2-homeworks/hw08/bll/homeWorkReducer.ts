import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                return state.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
            }
            else {
                return state.sort((a, b) => {
                    if (a.name < b.name) return 1
                    if (a.name > b.name) return -1
                    return 0
                })
            }
        }
        case 'check': {
            // console.log(state)
            return state.filter(el => el.age > action.payload)// need to fix
        }
        default:
            return state
    }
}

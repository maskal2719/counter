export type StateType = {
    count: number
    minCount: number
    maxCount: number
    disabledDisplay: boolean
}
const initialState: StateType = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    disabledDisplay: false
}

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "INCREMENT_COUNTER": {
            return {
                ...state, count: state.count + 1
            }
        }
        case "RESET": {
            return {
                ...state, count: state.minCount
            }
        }
        case "MAX_COUNTER_VALUE": {
            return {
                ...state, maxCount: action.payload.newMaxValue
            }
        }
        case "MIN_COUNTER_VALUE": {
            return {
                ...state, minCount: action.payload.newMinValue
            }
        }
        case "DISABLED_DISPLAY": {
            return {
                ...state, disabledDisplay: action.payload.value
            }
        }
        case "SET_SETTING": {
            return {
                ...state, count : action.payload.value
            }
        }
        default : {
            return state
        }
    }
}

export type ActionsType =
    IncrementCounterActionType
    | ResetCounterActionType
    | MinCounterValueActionType
    | MaxCounterValueActionType
    | DisabledDisplayActionType
    | NewSettingActionType


type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type MinCounterValueActionType = ReturnType<typeof minCounterValueAC>
type MaxCounterValueActionType = ReturnType<typeof maxCounterValueAC>
type DisabledDisplayActionType = ReturnType<typeof disabledDisplayAC>
type NewSettingActionType = ReturnType<typeof newSettingAC>
export const incrementCounterAC = () => {
    return {
        type: 'INCREMENT_COUNTER'
    } as const
}
export const resetCounterAC = () => {
    return {
        type: 'RESET'
    } as const
}
export const minCounterValueAC = (newMinValue: number) => {
    return {
        type: 'MIN_COUNTER_VALUE',
        payload: {
            newMinValue
        }
    } as const
}
export const maxCounterValueAC = (newMaxValue: number) => {
    return {
        type: 'MAX_COUNTER_VALUE',
        payload: {
            newMaxValue
        }
    } as const
}

export const disabledDisplayAC = (value: boolean) => {
    return {
        type: 'DISABLED_DISPLAY',
        payload: {
            value
        }
    } as const
}

export const newSettingAC = (value: number) => {
    return {
        type: 'SET_SETTING',
        payload: {
            value
        }
    } as const
}
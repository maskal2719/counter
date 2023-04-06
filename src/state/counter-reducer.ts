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

export const counterReducer = (state: StateType = initialState, action: ActionsType) : StateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER": {
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
    }
}

export type ActionsType =
    IncrementCounterActionType
    | ResetCounterActionType
    | MinCounterValueActionType
    | MaxCounterValueActionType


type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type MinCounterValueActionType = ReturnType<typeof minCounterValueAC>
type MaxCounterValueActionType = ReturnType<typeof maxCounterValueAC>
const incrementCounterAC = () => {
    return {
        type: 'INCREMENT-COUNTER'
    } as const
}
const resetCounterAC = () => {
    return {
        type: 'RESET'
    } as const
}
const minCounterValueAC = (newMinValue: number) => {
    return {
        type: 'MIN_COUNTER_VALUE',
        payload: {
            newMinValue
        }
    } as const
}
const maxCounterValueAC = (newMaxValue: number) => {
    return {
        type: 'MAX_COUNTER_VALUE',
        payload: {
            newMaxValue
        }
    } as const
}
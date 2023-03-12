import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>  // 1: State Type
export type AppStoreType = ReturnType<typeof setupStore> // 2: Store Type (тип, который вернет функция setupStore)
export type AppDispatchType = ReturnType<typeof setupStore> // 3: Dispatch type
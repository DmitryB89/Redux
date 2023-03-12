// Обертка над reducer'ом с доп. функционалом

import {UserType} from "../../models/UserType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserStateType = {
    users: UserType[]
    isLoading: boolean
    error: string
    count:number
}
const initialState: UserStateType = {
    users: [],
    isLoading: false,
    error: '',
    count:0

}

export const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{ // Аналог switch case (каждый case - отдельный reducer)
        increment(state,action: PayloadAction<number>) {

        }

    }
})
// После создания slice, из него можно отдельно вытащить reducer и action creators:
export default userSlice.reducer
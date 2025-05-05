import {createAction, createReducer} from "@reduxjs/toolkit";

export const changeThemeModeAC = createAction<{ themeMode: ThemeMode }>('app/changeThemeMode')

const initialState = {
    ThemeMode: 'light' as ThemeMode
}

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeThemeModeAC, (state, action) => {
            state.ThemeMode = action.payload.themeMode
        })
})

export type ThemeMode = 'dark' | 'light'
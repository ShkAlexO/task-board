import {RootState} from "../../../app/store";
import {ThemeMode} from "../../../app/app-reducer";

export const selectThemeMode = (state:RootState):ThemeMode  => state.app.ThemeMode

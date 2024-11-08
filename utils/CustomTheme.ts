import {DarkTheme as NavigationDarkTheme} from "@react-navigation/native"

export const DarkTheme: typeof NavigationDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        background: "#181818",
    },
}

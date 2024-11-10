import {ThemeProvider} from "@react-navigation/native"
import {useFonts} from "expo-font"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import {useEffect} from "react"
import "react-native-reanimated"
import * as SystemUI from "expo-system-ui"
import {StatusBar} from "expo-status-bar"

import "../global.css"
import {DarkTheme} from "@/utils/CustomTheme"

SplashScreen.preventAutoHideAsync()
SystemUI.setBackgroundColorAsync("#5c281d")

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Handwriting: require("../assets/fonts/Handwriting.ttf"),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }
    return (
        <>
            <ThemeProvider value={DarkTheme}>
                <Stack>
                    <Stack.Screen
                        name="(stack)"
                        options={{headerShown: false}}
                    />
                </Stack>
            </ThemeProvider>
            <StatusBar style={"light"} />
        </>
    )
}

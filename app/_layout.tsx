import {ThemeProvider} from "@react-navigation/native"
import {useFonts} from "expo-font"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import {useEffect} from "react"
import "react-native-reanimated"

import {useColorScheme} from "@/hooks/useColorScheme"

import "../global.css"
import {DarkTheme} from "@/utils/CustomTheme"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Burmese: require("../assets/fonts/Handwriting.ttf"),
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
        <ThemeProvider value={DarkTheme}>
            <Stack>
                <Stack.Screen name="(stack)" options={{headerShown: false}} />
            </Stack>
        </ThemeProvider>
    )
}

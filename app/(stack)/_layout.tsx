import {Slot} from "expo-router"
import {SafeAreaView} from "react-native-safe-area-context"
import Header from "@/components/Header"

export default function StackLayout() {
    return (
        <>
            <SafeAreaView className=" flex-1 mt-2 sm:mt-6 w-full max-w-screen-lg mx-auto px-2">
                <Header />
                <Slot />
            </SafeAreaView>
        </>
    )
}

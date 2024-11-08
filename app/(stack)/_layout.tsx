import Header from "@/components/Header"
import Text from "@/components/Text"
import {Slot, Stack} from "expo-router"
import {StatusBar} from "expo-status-bar"
import {Image, View} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"

export default function StackLayout() {
    return (
        <>
            <SafeAreaView className=" flex-1 mt-2 sm:mt-6 w-full max-w-screen-lg mx-auto px-2">
                <Header />
                <Slot />
            </SafeAreaView>
            <StatusBar style="light" />
        </>
    )
}

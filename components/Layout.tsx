import {Image, View} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import Text from "./Text"

interface Props {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <SafeAreaView className=" flex-1 mt-2 sm:mt-6 px-2">
            <View className=" my-4">
                <Image
                    source={require("@/assets/images/mtk.png")}
                    alt="Min Thein Kha"
                    resizeMode="cover"
                    className=" mx-auto w-28 h-28"
                />
                <Text className=" text-center text-3xl mt-5">
                    လက်ထောက်ဗေဒင်
                </Text>
            </View>
            <>{children}</>
        </SafeAreaView>
    )
}

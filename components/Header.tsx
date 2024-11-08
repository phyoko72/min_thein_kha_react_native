import {View, Image} from "react-native"
import Text from "./Text"

export default function Header() {
    return (
        <View className=" mt-8 mb-4">
            <Image
                source={require("@/assets/images/mtk.png")}
                alt="Min Thein Kha"
                resizeMode="cover"
                className=" mx-auto w-28 h-28"
            />
            <Text className=" text-center mt-5">လက်ထောက်ဗေဒင်</Text>
        </View>
    )
}

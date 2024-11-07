import Layout from "@/components/Layout"
import Text from "@/components/Text"
import {useLocalSearchParams, useRouter} from "expo-router"
import {Pressable, ScrollView, View} from "react-native"
import data from "@/data/data.json"
import {FlashList} from "@shopify/flash-list"
import {TouchableOpacity} from "react-native-gesture-handler"
import {SafeAreaView} from "react-native-safe-area-context"
export default function SelectAnswer() {
    const {id} = useLocalSearchParams<{id: string}>()
    const question = data.questions.find((qtn) => qtn.questionNo === Number(id))
    const router = useRouter()
    return (
        <Layout>
            <Pressable
                className=" bg-[#5c281d] mx-auto mb-3 rounded-full"
                onPress={() => {
                    router.back()
                }}
            >
                <Text className=" px-4 py-2 text-lg">Back</Text>
            </Pressable>
            <Text className=" text-center mb-2 text-xl">
                {question?.questionName!}
            </Text>
            <ScrollView>
                <View className=" h-[500px] bg-blue-500 flex-wrap gap-1">
                    {data.numberList.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                className=" p-1 w-16 h-16 sm:w-20 sm:h-20 justify-center items-center bg-[#5c281d]"
                            >
                                <Text>{item}</Text>
                            </Pressable>
                        )
                    })}
                </View>
            </ScrollView>
        </Layout>
    )
}

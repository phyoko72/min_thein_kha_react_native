import Layout from "@/components/Layout"
import Text from "@/components/Text"
import {Link, useLocalSearchParams, useRouter} from "expo-router"
import {Pressable, ScrollView, View} from "react-native"
import data from "@/data/data.json"

const mmToEng = (x: string): number => {
    switch (x) {
        case "၁":
            return 1
        case "၂":
            return 2
        case "၃":
            return 3
        case "၄":
            return 4
        case "၅":
            return 5
        case "၆":
            return 6
        case "၇":
            return 7
        case "၈":
            return 8
        case "၉":
            return 9
        case "၁၀":
            return 10
        default:
            return 0
    }
}

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
                            <Link
                                key={index}
                                href={{
                                    pathname: "/(stack)/answer/[answerId]",
                                    params: {
                                        answerId: mmToEng(item),
                                        questionId: question?.questionNo,
                                    },
                                }}
                                replace
                                asChild
                            >
                                <Pressable
                                    key={index}
                                    className=" p-1 w-16 h-16 sm:w-20 sm:h-20 justify-center items-center bg-[#5c281d]"
                                >
                                    <Text>{item}</Text>
                                </Pressable>
                            </Link>
                        )
                    })}
                </View>
            </ScrollView>
        </Layout>
    )
}

import Layout from "@/components/Layout"
import Text from "@/components/Text"
import {useLocalSearchParams, useRouter} from "expo-router"
import {Pressable} from "react-native"
import data from "@/data/data.json"

export default function SelectAnswer() {
    const {answerId, questionId} = useLocalSearchParams<{
        answerId: string
        questionId: string
    }>()
    const result = data.answers.find(
        (ans) =>
            ans.questionNo === Number(questionId) &&
            ans.answerNo === Number(answerId)
    )
    const router = useRouter()
    console.log({result})
    return (
        <Layout>
            <Pressable
                className=" bg-[#5c281d] mx-auto mb-6 rounded-full"
                onPress={() => {
                    router.dismissAll()
                }}
            >
                <Text className=" px-4 py-2 text-lg">မေးခွန်းမေးရန်</Text>
            </Pressable>
            <Text className=" text-center">{result?.answerResult!}</Text>
        </Layout>
    )
}

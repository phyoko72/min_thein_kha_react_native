import Text from "@/components/Text"
import {useLocalSearchParams, useRouter} from "expo-router"
import {Pressable} from "react-native"
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
    const {answerId, questionId} = useLocalSearchParams<{
        answerId: string
        questionId: string
    }>()
    const result = data.answers.find(
        (ans) =>
            ans.questionNo === Number(questionId) &&
            ans.answerNo === mmToEng(answerId)
    )
    const router = useRouter()
    console.log({result})
    return (
        <>
            <Pressable
                className=" bg-[#5c281d] mx-auto mb-6 sm:mb-12 rounded-full"
                onPress={() => {
                    router.dismissAll()
                }}
            >
                <Text className=" px-4 py-2 text-lg">မေးခွန်းရွေးရန်</Text>
            </Pressable>
            <Text className=" text-center">{result?.answerResult!}</Text>
        </>
    )
}

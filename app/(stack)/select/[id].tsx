import {Link, useLocalSearchParams, useRouter} from "expo-router"
import {
    FlatList,
    Pressable,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native"
import Text from "@/components/Text"
import data from "@/data/data.json"

export default function SelectAnswer() {
    const {id} = useLocalSearchParams<{id: string}>()
    const question = data.questions.find((qtn) => qtn.questionNo === Number(id))
    const router = useRouter()
    const {width} = useWindowDimensions()

    return (
        <>
            <Pressable
                className=" bg-[#5c281d] mx-auto mb-3 rounded-full"
                onPress={() => {
                    router.back()
                }}
            >
                <Text className=" px-4 py-2 text-lg">Back</Text>
            </Pressable>
            <Text
                className=" text-center mb-2 text-xl py-2"
                textProps={{numberOfLines: 3, adjustsFontSizeToFit: true}}
            >
                {question?.questionName!}
            </Text>

            <FlatList
                data={data.numberList}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{
                    rowGap: 5,
                    width: "100%",
                    marginHorizontal: "auto",
                }}
                columnWrapperStyle={{gap: 5}}
                showsVerticalScrollIndicator={false}
                numColumns={width > 600 ? 9 : 5}
                renderItem={({item}) => {
                    return (
                        <Link
                            href={{
                                pathname: "/(stack)/answer/[answerId]",
                                params: {
                                    answerId: item,
                                    questionId: question?.questionNo,
                                },
                            }}
                            replace
                            asChild
                        >
                            <TouchableOpacity
                                activeOpacity={0.5}
                                className="flex-grow w-16 h-16 justify-center items-center bg-[#5c281d]"
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </Link>
                    )
                }}
            />
        </>
    )
}

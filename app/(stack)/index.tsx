import {useEffect, useState} from "react"
import Text from "@/components/Text"
import {Image, Pressable, TextInput, View} from "react-native"
import data from "@/data/data.json"
import {FlashList} from "@shopify/flash-list"
import {Link} from "expo-router"
import {SafeAreaView} from "react-native-safe-area-context"
import {TabBarIcon} from "@/components/navigation/TabBarIcon"

type Question = {
    questionNo: number
    questionName: string
}

export default function Home() {
    const [questions, setQuestions] = useState<Question[]>(data.questions)
    const [inputText, setInputText] = useState<string>("")

    useEffect(() => {
        if (!inputText.trim()) return setQuestions(data.questions)
        const timeOut = setTimeout(() => {
            const result = data.questions.filter((qtn) =>
                qtn.questionName.includes(inputText.trim())
            )
            setQuestions(result)
        }, 700)
        return () => clearTimeout(timeOut)
    }, [inputText])

    console.log("Home render")

    return (
        <SafeAreaView className=" flex-1 mt-7 px-2">
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

            <View className=" flex-row items-center border border-white p-2 mb-8">
                <TextInput
                    className=" flex-grow text-white text-lg my-3"
                    placeholder="မေးခွန်းရှာရန်"
                    placeholderTextColor={"grey"}
                    cursorColor={"white"}
                    value={inputText}
                    onChangeText={setInputText}
                />

                <TabBarIcon name="search" size={30} color={"#f5f5f5"} />
            </View>

            <FlashList
                data={questions}
                keyExtractor={(item) => item.questionNo.toString()}
                renderItem={({item}) => {
                    console.log("List Item ", item.questionNo)
                    return (
                        <Link
                            href={"/"}
                            asChild
                            className=" border border-white rounded-md p-2"
                        >
                            <Pressable>
                                <Text>{item.questionName}</Text>
                            </Pressable>
                        </Link>
                    )
                }}
                ItemSeparatorComponent={() => <View className=" h-5" />}
                ListEmptyComponent={() => (
                    <View className=" border border-white rounded-md p-2">
                        <Text className=" text-center">No Data to show</Text>
                    </View>
                )}
                estimatedItemSize={120}
            />
        </SafeAreaView>
    )
}

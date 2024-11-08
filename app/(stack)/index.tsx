import {useEffect, useRef, useState} from "react"
import Text from "@/components/Text"
import {TextInput, View, Pressable} from "react-native"
import data from "@/data/data.json"
import {FlashList} from "@shopify/flash-list"
import {Link} from "expo-router"
import {TabBarIcon} from "@/components/navigation/TabBarIcon"

type Question = {
    questionNo: number
    questionName: string
}

export default function Home() {
    const [questions, setQuestions] = useState<Question[]>(data.questions)
    const [inputText, setInputText] = useState<string>("")

    const inputRef = useRef<TextInput>(null)

    useEffect(() => {
        if (!inputText.trim()) return setQuestions(data.questions)

        const timeOut = setTimeout(() => {
            inputRef.current?.blur()
            const result = data.questions.filter((qtn) =>
                qtn.questionName.includes(inputText.trim())
            )
            setQuestions(result)
        }, 700)
        return () => clearTimeout(timeOut)
    }, [inputText])

    return (
        <>
            <View className=" flex-row items-center border border-white p-2 mb-8">
                <TextInput
                    ref={inputRef}
                    className=" flex-grow text-white text-lg my-3"
                    placeholder="မေးခွန်းရှာရန်"
                    placeholderTextColor={"grey"}
                    cursorColor={"white"}
                    value={inputText}
                    onChangeText={setInputText}
                    style={{fontFamily: "Burmese"}}
                />

                <TabBarIcon name="search" size={30} color={"#f5f5f5"} />
            </View>

            <FlashList
                data={questions}
                keyExtractor={(item) => item.questionNo.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return (
                        <Link
                            href={{
                                pathname: "/(stack)/select/[id]",
                                params: {id: item.questionNo},
                            }}
                            className=" border border-white rounded-md p-2"
                            asChild
                        >
                            <Pressable>
                                <Text>{item.questionName}</Text>
                            </Pressable>
                        </Link>
                    )
                }}
                ItemSeparatorComponent={() => <View className=" h-6" />}
                ListEmptyComponent={() => (
                    <View className=" border border-white rounded-md p-2">
                        <Text className=" text-center">No Data to show</Text>
                    </View>
                )}
                estimatedItemSize={120}
            />
        </>
    )
}

import {useEffect, useRef, useState} from "react"
import {TextInput, View, Pressable} from "react-native"
import {Link} from "expo-router"
import {FlashList} from "@shopify/flash-list"
import Text from "@/components/Text"
import {TabBarIcon} from "@/components/navigation/TabBarIcon"
import data from "@/data/data.json"

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
            const result = data.questions.filter((qtn) =>
                qtn.questionName.includes(inputText.trim())
            )
            if (result.length > 0) {
                inputRef.current?.blur()
            }
            setQuestions(result)
        }, 1500)
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
                    style={{fontFamily: "Handwriting"}}
                />

                <TabBarIcon name="search" size={30} color={"#f5f5f5"} />
            </View>

            <FlashList
                data={questions}
                keyExtractor={(item) => item.questionNo.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
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

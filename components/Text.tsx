import {Text as CustomText} from "react-native"

export default function Text({children}: {children: string}) {
    return <CustomText className=" text-white text-2xl">{children}</CustomText>
}

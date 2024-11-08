import {Text as CustomText, TextProps} from "react-native"

interface Props {
    className?: string
    children: string
    textProps?: TextProps
}

export default function Text({children, className, textProps}: Props) {
    return (
        <CustomText
            className={`text-[#e5e5e5] text-xl sm:text-3xl ${className} leading-10 pt-2`}
            style={{fontFamily: "Burmese"}}
            {...textProps}
        >
            {children}
        </CustomText>
    )
}

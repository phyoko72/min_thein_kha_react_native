import {Text as CustomText} from "react-native"

interface Props {
    className?: string
    children: string
}

export default function Text({children, className}: Props) {
    return (
        <CustomText className={`text-white/85 text-2xl ${className}`}>
            {children}
        </CustomText>
    )
}

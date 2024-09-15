import { ComponentProps } from "react"
import { Input as GluestackInput, 
    InputField,
    Text, 
    VStack 
} from "@gluestack-ui/themed"


type InputProps = ComponentProps<typeof InputField> & {
    isInvalid?: boolean
    isReadOnly?: boolean
    errorMessage?: string | null
    placeholder: string
}

export function InputText({isInvalid = false, errorMessage = null, isReadOnly = false, placeholder, ...rest}: InputProps) {
    const invalid = !!errorMessage || isInvalid

    return (
        <VStack gap={12}>
            <Text color="$secondary100" fontWeight={"$medium"}> 
                What activity?
            </Text>

                <GluestackInput 
                    w={"$full"} 
                    h={"$12"} 
                    borderWidth={"$1"} 
                    borderColor="$secondary700"
                    borderRadius={"$md"}
                    $focus={{
                        borderWidth: 1,
                        borderColor: invalid ? '$red500' : "$violet400",
                    }}
                    $invalid={{
                        borderWidth: 1,
                        borderColor: '$red500'
                    }}
                    isReadOnly={isReadOnly}
                    isInvalid={isInvalid}
                    opacity={ isReadOnly ? 0.5 : 1 }
                >
                    <InputField 
                        bg="$secondary950" 
                        placeholder={placeholder}
                        px={"$4"}
                        color="$violet300"
                        fontFamily="$body" 
                        // borderRadius={"$md"}
                        placeholderTextColor={"$secondary300"}
                        {...rest}
                    />
                </GluestackInput>

        </VStack>
    )
}
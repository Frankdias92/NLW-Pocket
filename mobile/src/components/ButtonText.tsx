import { Button, Center, Icon, Text } from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { ComponentProps, useState } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = ComponentProps<typeof Button> & {
    title: string
    circleBtn?: boolean
    variant?: "outline" | "solid" | "link"
    showIcon?: boolean

}

export function ButtonText({ title, circleBtn = false, showIcon = true, variant = 'outline' , ...rest }: ButtonProps) {

    return (
            <Button
                flex={showIcon ? 0 : 1}
                mt={circleBtn ? 0 : 24}
                gap={"$2"} 
                alignItems="center"
                rounded={circleBtn ? "$full" : "$xl"}
                bgColor={variant === 'solid' ? "$secondary700" : "$violet500" }
                $active-bgColor={variant === 'solid' ? "$secondary600" : "$violet600"}
                {...rest}
            >
                {showIcon && <Icon as={Plus}  color="$secondary100"/>}
               {!circleBtn && <Text color="$secondary100">{title}</Text>}
            </Button>
        )
}
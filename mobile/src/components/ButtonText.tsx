import { Button, Center, Icon, Text } from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { ComponentProps, useState } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = ComponentProps<typeof Button> & {
    title: string
    circle?: boolean
}

export function ButtonText({ title, circle = false, ...rest }: ButtonProps) {
    const [circleBtn, setCircleBtn] = useState(false)

    const handleWithCircleBtn = () => {
        setCircleBtn(circle)
    }

    return (
            <Button
                mt={circle ? 0 : 24}
                gap={"$2"} 
                alignItems="center"
                rounded={circle ? "$full" : "$xl"}
                bgColor="$violet500"
                {...rest}
            >
                <Icon as={Plus}  color="$secondary100"/>
               {circleBtn && <Text color="$secondary100">{title}</Text>}
            </Button>
        )
}
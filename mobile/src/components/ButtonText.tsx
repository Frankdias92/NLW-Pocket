import { Button, Center, Icon, Text } from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = ComponentProps<typeof Button> & {
    title: string
}

export function ButtonText({ title, ...rest }: ButtonProps) {

    return (
            <Button
                mt={24}
                gap={"$2"} 
                alignItems="center"
                bgColor="$violet500"
                {...rest}
            >
                <Icon as={Plus}  color="$secondary100"/>
                <Text color="$secondary100">{title}</Text>
            </Button>
        )
}
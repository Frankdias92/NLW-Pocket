import { Button, Icon, Text } from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button> & {
    itemList: string
}

export function ItemOfList({ itemList, ...rest }: ButtonProps) {
    return (
        <Button 
            mr={"$3"}
            rounded={'$3xl'}
            alignItems="center"
            backgroundColor="$"
            borderWidth={"$1"}
            sx={{borderColor: '$secondary400'}}
            {...rest}
        >
            <Icon as={Plus}  color="$secondary400" mr={4}/>
            <Text color="$secondary100">{itemList}</Text>
        </Button>
    )
}
import { Button as GluestackButton, Icon, Text } from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof GluestackButton> & {
    itemList: string
}

export function ItemOfList({ itemList, ...rest }: ButtonProps) {
    return (
        <GluestackButton 
            mr={"$3"}
            rounded={'$3xl'}
            alignItems="center"
            backgroundColor="$"
            borderWidth={"$1"}
            borderColor="$secondary400"
            $active-bgColor="$secondary800"
            $active-borderColor="$secondary300"
            {...rest}
        >
            <Icon as={Plus}  color="$secondary400" mr={4}/>
            <Text color="$secondary100">{itemList}</Text>
        </GluestackButton>
    )
}
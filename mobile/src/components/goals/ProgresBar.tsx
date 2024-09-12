import { Center, HStack, Text } from "@gluestack-ui/themed";
import { View } from "react-native";


export function ProgresBar() {
    return (
        <Center w={"$full"} gap={12}>
            <View className="min-w-full h-2 bg-violet-600 rounded-full"/>
            <HStack w={"$full"} justifyContent="space-between">
                <Text alignSelf="flex-start" color="$secondary400">
                    Você completou <Text color="$secondary100">8</Text> de <Text color="$secondary100">15</Text>.
                </Text>

                <Text color="$secondary400">
                    58%
                </Text>
            </HStack>
        </Center>
    )
}
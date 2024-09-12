import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { WeekOfTask } from "./goals/WeekOfTask";
import { ProgresBar } from "./goals/ProgresBar";
import { View } from "react-native";
import { PreSetList } from "./goals/PreSetList";


export function GoalsTasks() {

    return (
        <Center flex={1} justifyContent="flex-start" mt={"$10"} gap={24} >
            <VStack gap={24} >
                <WeekOfTask />
                <ProgresBar />
                <Center px={'$8'}>
                    <View className="min-w-full h-0.5 bg-stone-800 rounded-full"/>
                </Center>
                <PreSetList />

            </VStack>
            <HStack>
                <Text>Tasks</Text>
            </HStack>
        </Center>
    )
}
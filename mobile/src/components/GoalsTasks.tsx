import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { WeekOfTask } from "./goals/WeekOfTask";


export function GoalsTasks() {

    return (
        <Center flex={1} justifyContent="flex-start" mt={"$10"} gap={24}>
            <VStack gap={24}>
                <WeekOfTask />
            </VStack>
            <HStack>
                <Text>Tasks</Text>
            </HStack>
        </Center>
    )
}
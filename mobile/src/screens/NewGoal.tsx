import { Main } from "@components/createNewGoal/main";
import { Center, VStack } from "@gluestack-ui/themed";

export function NewGoal() {
    return (
        <VStack flex={1} bgColor="$backgroundDark950">
        <Center flex={1} justifyContent="flex-start">
          <VStack >
            <Main />
          </VStack>
        </Center>
      </VStack>
    )
}
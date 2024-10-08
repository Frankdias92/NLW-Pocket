import {
  Center,
  VStack,
} from '@gluestack-ui/themed'

import { GoalsTasks } from '@components/GoalsTasks'

export function Home() {

  return (
    <VStack flex={1} bgColor="$backgroundDark950">
      <Center flex={1} justifyContent="flex-start">
        <VStack >
          <GoalsTasks />
        </VStack>
      </Center>
    </VStack>
  )
}

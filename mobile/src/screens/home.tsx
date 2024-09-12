import {
  Center,
  VStack,
} from '@gluestack-ui/themed'

import { EntryPage } from '@components/EntryPage'
import { GoalsTasks } from '@components/GoalsTasks'

export function Home() {

  return (
    <VStack flex={1} bgColor="$backgroundDark950">
      <Center flex={1} justifyContent="flex-start" px={'$8'}>
        <VStack>
          <GoalsTasks />
        </VStack>
      </Center>
    </VStack>
  )
}

import { EntryPage } from '@components/EntryPage'
import {
  Center,
  VStack,
} from '@gluestack-ui/themed'

export function Home() {

  return (
    <VStack flex={1} bgColor="$secondary800">
      <Center flex={1} justifyContent="flex-start" px={'$8'}>
        <VStack>
          <EntryPage />
        </VStack>
      </Center>
    </VStack>
  )
}

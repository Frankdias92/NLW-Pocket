import { EntryPage } from '@components/entryPage'
import {
  Button,
  Center,
  HStack,
  Input,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed'
import { Text } from 'react-native'

export function Home() {
  //   function handleClick() {
  //     console.log('click')
  //   }

  return (
    <VStack flex={1} bgColor="$secondary800">
      <Center flex={1} justifyContent="flex-start" px={'$8'}>
        <Text>Test</Text>
        <EntryPage />
      </Center>
    </VStack>
  )
}

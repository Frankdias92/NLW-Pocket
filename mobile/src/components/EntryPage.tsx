import { Center, Icon, Text, VStack } from '@gluestack-ui/themed'

import Logo from '@assets/logorbit.svg'

export function EntryPage() {
  return (
    <Center flex={1} m={'auto'}>
      <VStack>
        <Icon as={Logo} width={20} height={20}/>
      </VStack>
    </Center>
  )
}

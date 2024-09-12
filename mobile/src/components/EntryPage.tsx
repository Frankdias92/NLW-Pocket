import { Center, Icon, Text, VStack } from '@gluestack-ui/themed'

import Logo from '@assets/logorbit.svg'
import Rocket from '@assets/rocket.svg'
import { ButtonText } from './ButtonText'

export function EntryPage() {
  return (
    <Center flex={1} >
      <VStack width={'$full'} gap={42}>
        <Icon as={Logo} width={115} height={36} margin={'auto'}/>
        <Icon as={Rocket} width={305} height={299} margin={'auto'}/>
        <Center>
          <Text>Você ainda não cadastrou nenhuma meta,</Text>
          <Text> que tal cadastrar um agora mesmo?</Text>
          <ButtonText title='Cadastrar meta'/>
        </Center>
      </VStack>
    </Center>
  )
}

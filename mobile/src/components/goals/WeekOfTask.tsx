import { Center, Heading, HStack, Icon, VStack } from "@gluestack-ui/themed";

import Logo from '@assets/logoFrame.svg'
import { ButtonText } from "@components/ButtonText";


export function WeekOfTask() {
    return (
        <VStack w={"$full"} px={'$8'}>
            <HStack w={"$full"} alignItems="center" justifyContent="space-between" >
                <HStack gap={12} h={50} alignItems="center">
                    <Icon as={Logo} width={36} height={36} margin={'auto'} />
                    <Heading color="$secondary100">
                        05 a 12 de Agosto
                    </Heading>
                </HStack>
                <ButtonText title="Cadastrar meta" circle={true}/>
            </HStack>
        </VStack>
    )
}
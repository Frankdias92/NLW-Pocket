import { Center, Heading, HStack, Icon, VStack } from "@gluestack-ui/themed";

import Logo from '@assets/logoFrame.svg'
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";


export function WeekOfTask() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    
    return (
        <VStack w={"$full"} px={'$8'}>
            <HStack w={"$full"} alignItems="center" justifyContent="space-between" >
                <HStack gap={12} h={50} alignItems="center">
                    <Icon as={Logo} width={36} height={36} margin={'auto'} />
                    <Heading color="$secondary100">
                        05 a 12 de Agosto
                    </Heading>
                </HStack>
                <ButtonText title="Cadastrar meta" circleBtn={true} showIcon={true} onPress={() => navigation.navigate('newGoal')}/>
            </HStack>
        </VStack>
    )
}
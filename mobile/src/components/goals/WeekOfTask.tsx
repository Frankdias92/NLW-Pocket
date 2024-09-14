import { Center, Heading, HStack, Icon, VStack } from "@gluestack-ui/themed";

import Logo from '@assets/logoFrame.svg'
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../../service/api";
import dayjs from "dayjs";


export function WeekOfTask() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60 // 60 seconds
    })
    
    const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
    const lastDayOfWeek = dayjs().endOf('week').format('D MMM')
    
    return (
        <VStack w={"$full"} px={'$8'}>
            <HStack w={"$full"} alignItems="center" justifyContent="space-between" >
                <HStack gap={12} h={50} alignItems="center">
                    <Icon as={Logo} width={36} height={36} margin={'auto'} />
                    <Heading color="$secondary100" >
                        { firstDayOfWeek }  -  { lastDayOfWeek }
                    </Heading>
                </HStack>
                <ButtonText title="Cadastrar meta" circleBtn={true} showIcon={true} onPress={() => navigation.navigate('newGoal')}/>
            </HStack>
        </VStack>
    )
}
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { HeadingNewGoals } from "./headingNewGoals";
import { InputText } from "@components/InputText";
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";


export function Main() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    return (
        <Center flex={1} my={"$10"} gap={24} px={"$8"}>
            <VStack h={"$full"} alignItems="stretch" justifyContent="space-between">
                <HStack>
                    <VStack gap={24}>
                        <HeadingNewGoals />
                        <InputText />

                    </VStack>
                </HStack>

                <HStack w={"$full"} gap={12} alignSelf="flex-end">
                    <ButtonText title="Close" showIcon={false} variant="solid" onPress={() => navigation.goBack()}/>
                    <ButtonText title="Save" showIcon={false} />
                </HStack >
            </VStack>
        </Center>
    )
}
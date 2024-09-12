import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";


export function HeadingNewGoals() {

    return (
        <VStack w={"$full"} gap={12}>
            <Heading color="$secondary100" textAlign="left" w={"$full"}>
                Add a new goal
            </Heading>
            <HStack gap={5}>
                <VStack>
                    <Text color="$secondary400" >
                        Add activities that 
                        {<Text color="$secondary400" underline> make you feel good </Text>}
                        and that you want to keep doing every week.
                    </Text>                       
                </VStack>
            </HStack>
        </VStack>
    )
}
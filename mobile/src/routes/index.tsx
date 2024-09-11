import { DefaultTheme, NavigationContainer } from '@react-navigation/native' 

import { gluestackUIConfig } from '@gluestack-ui/config'
import { Box } from '@gluestack-ui/themed'

import { AppRouter } from './app.routes'

export function Routes() {
    const theme = DefaultTheme
    theme.colors.background = gluestackUIConfig.tokens.colors.trueGray700
    
    return (
        <Box flex={1} bg='$secondary800'>
            <NavigationContainer theme={theme}>
                <AppRouter />
            </NavigationContainer>
        </Box>
    )
}